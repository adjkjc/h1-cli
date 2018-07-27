.PHONY: h1_cli pricing
h1_cli:
	cd modules/h1-cli; bash update.sh;
	ln -sf ../modules/h1-cli/dist site/h1-cli;

pricing:
	cd modules/pricing; bash update.sh;
	ln -sf ../modules/pricing/dist site/pricing;