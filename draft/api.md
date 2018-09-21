authentication + authorisation do public api jest na kilka sposobow:
1. auth-token użytkownika, który posiada dostęp do wszystkiego co użytkownik ma dostęp (możliwość uzyskania przez: user+pass, ssh key)
2. service accounts - specjalny auth-token ale z możliwością ograniczenia tylko do danych zasobów lub operacji, istotne dla zapewnienia bezpieczeństwa przy automatyzacji
3. resource credentials - zasób może mieć własne "credentails" (password, ssh, x509) które pozwalają na dostęp do odczytu z public-api danych TYLKO tego zasobu.