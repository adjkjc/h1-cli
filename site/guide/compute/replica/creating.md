# Utworzenie repliki

## Wprowadzenie

Dokument wyjaśnia w jaki sposób utworzyć *[Replikę](/resource/compute/replica.md)*.

## Warunki wstępne

Operacja może zostać wykonana po spełnieniu następujących warunków:

* wszystkie [warunki utworzenia Repliki](/resource/compute/replica.md#utworzenie)

## Instrukcja

### CLI

W celu wykonania operacji z wykorzystaniem CLI wykonaj następujące polecenie:

```bash
h1 replica create --local-vm Local-VM --autostart
```

gdzie:

 * ```--local-vm``` określa identyfikator lokalnej wirtualnej maszyny
 * ```--autostart``` określa, że po wykonaniu polecenia rozpocznie się replikacja

Polecenie należy wykonać na lokalnym serwerze Hyper-V, gdzie wprowadza zmiany mające na celu:

* dodanie nowego certyfikatu uwierzytelnienia do platformy
* konfiguruje replikacje dla wybranej maszyny wirtualnej
* rozpoczyna replikację maszyny wirtualnej.

cli(1.5.0){
Szczegółowe dane są dostępne w dokumentacji polecenia [CLI="replica create"].
}

### Powershell

W celu wykonania operacji z wykorzystaniem Powershell wykonaj następujący skrypt:

```powershell
[CmdletBinding(DefaultParameterSetName="VMName")]
Param(
    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$Email,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$Password,

    [parameter(Mandatory=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$Project,

    [parameter(Mandatory=$false, ParameterSetName="VM", ValueFromPipeline=$true)]
    [ValidateNotNullOrEmpty()]
    [string]$VM,

    [parameter(Mandatory=$true, ParameterSetName="VMId")]
    [ValidateNotNullOrEmpty()]
    [string]$VMId,

    [parameter(Mandatory=$true, ParameterSetName="VMName")]
    [ValidateNotNullOrEmpty()]
    [string]$VMName,

    [switch]$Autostart
)

$ErrorActionPreference = "Stop"

$VMobj = $VM;
if(!$VMobj -and $VMId) {
    $VMobj = Get-VM -Id $VMId;
};

if(!$VMobj -and $VMName) {
    $VMobj = Get-VM -Name $VMName;
};

if (!$VMobj) {
    Write-Error "VM not found";
        return
};

$session = Invoke-RestMethod -Method POST `
    -Body @{ email = $Email; password = $Password } `
    'https://api.hyperone.com/v1/user/me/session'

Write-Host "Logged in"

$secret = [guid]::NewGuid().toString()

$userProject = Invoke-RestMethod `
    -Headers @{ 'x-auth-token' = $session._id } `
    "https://api.hyperone.com/v1/project/$Project"

Write-Host "Resolved project Id"

$projectId = $userProject._id

$hostname = [System.Net.Dns]::GetHostName()

Write-Host "Identified hostname"

$replica = Invoke-RestMethod -Method POST `
    -Headers @{ 'x-auth-token' = $session._id; 'x-project' = $projectId } `
    -Body @{ hostname = $hostname; secret = $secret } `
    'https://api.hyperone.com/v1/replica'

Write-Host "Received certificate"

$ReplicaServerName = $replica.replicaServer

$certificateCaBase64 = 'MIIC9jCCAeKgAwIBAgIQDQAn8f6dH5BJmT98nIqXJTAJBgUrDgMCHQUAMBUxEzARBgNVBAMTCkh5cGVyT25lQ2EwHhcNMTYwMzIzMTQyNjIyWhcNMzkxMjMxMjM1OTU5WjAVMRMwEQYDVQQDEwpIeXBlck9uZUNhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjbIAo2YH9KaMWlD2oYr7xi2p8swXZ+wOHFH9XfzyZH/U/NIK4ZCFZ8ETEfc9mw5TEO7oHT+lmunEOAiDIwzWpVKv8po1Zj03kHdKDD36PyAl4Aa+J6vf9b2OC4k+zxyh2WxLUBSStSnlGtVs3DNmYK2QwDVDGxnaItndN6E1NRcFrucMmXpjCJ5MB9HOgtAHdaQSeLI9MM2OUHKzZcUhsZ3Mg/dMQcTxQbqHCba1XgtFpjIYW06bz5LUts0z7p/X5QmXLZAWUquSka++CF2jFVXI0VX2UZQvXNXb/WQTIaZyGFwXqSVZgJogToi+AyOXzXXOKo4AghJG5X6iYc+ymQIDAQABo0owSDBGBgNVHQEEPzA9gBB/zFkaesYGlnO/iiTaPtfToRcwFTETMBEGA1UEAxMKSHlwZXJPbmVDYYIQDQAn8f6dH5BJmT98nIqXJTAJBgUrDgMCHQUAA4IBAQALrX9eR0t5V0sUhZ8r8HyNI31hjbs8uOARBYoSdo5NAvrJseHnKJSljvTXbdzupWrhAc3lOElKkV9CoIfm6ZhkZwwXg6Nug7zpSy8XWPxB7ozBzin5ODcyYngeNsRh/kzrXd5g6qmXOYPyjjQE9BBt+hj7eH5iJs3pusMfM5JjGhSX29dgRm3j3xzhY172AHP++vI1Zyh/7fznX1hD3218kbPBxO3MRnJXiJ1ebj3MRBaQY89Vg3xZfj9wfHYO7ZB0XC5Bu1u3cxoNvVtz2yUQYGz8YGjrQUPzjamyqTMGQhJJ+yB1zWUm/HKWJCLkTqWxbtdxXwxsssZXixn57E06'

$CACertificatePath = [System.IO.Path]::GetTempFileName() + '.cer'
[System.Convert]::FromBase64String($certificateCaBase64) | Set-Content -Encoding Byte -Path $CACertificatePath

$CertificateBase64 = $replica.cert

function jobWait($job) {
    do {
        $JobData = [wmi]$job
        Start-Sleep -s 1
    } while ( $JobData.JobState -eq 4 )

    return $jobData
}


Write-Host "Disable Cert Revocation Check"
New-ItemProperty `
    -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Virtualization\Replication" `
    -Name DisableCertRevocationCheck `
    -Value 1 `
    -Type DWORD `
    -Force `
    | Out-Null

Write-Host "Importing CA"
$certificate = Import-Certificate -FilePath $CACertificatePath -CertStoreLocation Cert:\LocalMachine\Root

Remove-Item $CACertificatePath

Write-Host "Importing Cert"

$filePath = [System.IO.Path]::GetTempFileName() + '.pfx'

[System.Convert]::FromBase64String($CertificateBase64) | Set-Content -Encoding Byte -Path $filePath

$certificate = Import-PfxCertificate `
    -FilePath $filePath `
    -CertStoreLocation Cert:\LocalMachine\my `
    -Password (ConvertTo-SecureString -String $secret -Force -AsPlainText)

Remove-Item $filePath

Write-Host "Testing Connection"

Test-VMReplicationConnection `
    -ReplicaServerName $ReplicaServerName `
    -ReplicaServerPort 443 `
    -AuthenticationType Certificate `
    -CertificateThumbprint $certificate.Thumbprint

$VMID = $VMobj.Id

$Msvm_ComputerSystem = Get-WmiObject -Namespace root\virtualization\v2 -Class Msvm_ComputerSystem -Filter "Name='$VMID'"
$Msvm_ReplicationSettingData = $Msvm_ComputerSystem.GetRelated("Msvm_ReplicationSettingData") | % { $_ }

$Msvm_ReplicationSettingData.RecoveryConnectionPoint = $ReplicaServerName
$Msvm_ReplicationSettingData.AuthenticationType = 2 #1 - Kerberos, 2 - Certificate
$Msvm_ReplicationSettingData.RecoveryServerPortNumber = 443
$Msvm_ReplicationSettingData.CertificateThumbPrint = $certificate.Thumbprint
$Msvm_ReplicationSettingData.CompressionEnabled = 1
$Msvm_ReplicationSettingData.RecoveryHistory = 0
$Msvm_ReplicationSettingData.ReplicationInterval = 300

# 31 - SASDResourceTypeLogicalDisk
$Msvm_VirtualSystemSettingData = $Msvm_ComputerSystem.GetRelated("Msvm_VirtualSystemSettingData")
$Msvm_StorageAllocationSettingData = $Msvm_VirtualSystemSettingData.GetRelated("Msvm_StorageAllocationSettingData")
$Msvm_ReplicationSettingData.IncludedDisks = $Msvm_StorageAllocationSettingData |
    ? { $_.ResourceType -eq 31 } |
    % { $_.__PATH }

$Msvm_ReplicationService = Get-WmiObject -Namespace root\virtualization\v2 -Class Msvm_ReplicationService

$ret = $Msvm_ReplicationService.CreateReplicationRelationship($Msvm_ComputerSystem, $Msvm_ReplicationSettingData.GetText(2))

if ($ret.ReturnValue -eq 4096) {

    $JobData = jobWait($ret.job)

    if ($JobData.Status -ne "OK") {
        Write-Error $JobData.ErrorDescription
        return
    }
}

Write-Host "Replication successfully enabled"

if ($Autostart -eq $true){
    Start-VMInitialReplication -VMName $VM
    Write-Host "Replication successfully started"
}
```

Należy go wykonać w następujący sposób:

```
.\enable-replication.ps1 -Email user@example.com -Password H4slo -Project MyProject -VMId d9060319-46f4-45a0-b9db-c6cb367a107e
```

Skrypt przyjmuje następujące parametry:

 * ```-Email``` określa adres e-mail *Użytkownika*
 * ```-Password``` określa hasło *Użytkownika*
 * ```-Project``` określa identyfikator lub nazwę *Projektu*
 * ```-Vm``` określa identyfikator lub nazwę lokalnej wirtualnej maszyny

Polecenie należy wykonać na lokalnym serwerze Hyper-V, gdzie wprowadza zmiany mające na celu:

* dodanie nowego certyfikatu uwierzytelnienia do platformy
* konfiguruje replikacje dla wybranej maszyny wirtualnej
* rozpoczyna replikację maszyny wirtualnej (opcjonalnie).