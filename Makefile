.PHONY: resource
# .PHONY: h1_cli pricing resource
h1_cli:
	cd modules/h1-cli; bash update.sh;
	ln -sf ../modules/h1-cli/dist site/h1-cli;

#pricing:
#  	cd modules/pricing; bash update.sh;
#	ln -sf ../modules/pricing/dist site/pricing;

#resource:
#	cd modules/resources; bash update.sh;
#	ln -sf ../modules/resources/dist site/resource;


test:
    grep 'Wirtual.* Maszy.*' site/resource/ site/guide/ site/tutorials/ -R
