ifndef VIRTUAL_ENV
	VIRTUAL_ENV ?= .env
	PRE_DEPS := .env
else
	PRE_DEPS :=
endif

.env:
	virtualenv --python=python3 .env
	$(VIRTUAL_ENV)/bin/pip install -U pip setuptools

clean:
	find . -name '*.pyc' -delete
	find . -type d -name __pycache__ -exec rm -r {} \+
	rm -rf .env

cleanenv:
	rm -rf .env

installvirtualenv:
	pip install virtualenv


deps: $(PRE_DEPS)
	$(VIRTUAL_ENV)/bin/pip install -e .

start: deps
	$(VIRTUAL_ENV)/bin/jupyter notebook

lint:
	for file in $$(find . -name "*.py" ! -path */$$VIRTUAL_ENV/*); do pycodestyle $$file; done

.phony: clean deps installvirtualenv cleanenv

build: deps
	$(VIRTUAL_ENV)/bin/python setup.py bdist_wheel -d wheels;