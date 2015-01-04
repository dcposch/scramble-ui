
SRCS_JSX := $(wildcard jsx/*.jsx)


.PHONY: build
build: npm-install package.json build/app.js build/index.html

.PHONY: run
run: npm-install package.json build/index.html
	node ./node_modules/watchify/bin/cmd.js -t [ reactify --harmony ] jsx/*.jsx -o build/app.js &
	./node_modules/http-server/bin/http-server build/

.PHONY: npm-install
npm-install:
	npm install
	mkdir -p build
	cp ./node_modules/bootstrap/dist/css/bootstrap.min.css build

build/index.html: index.html
	cp index.html build/

build/app.js: $(SRCS_JSX)
	node ./node_modules/browserify/bin/cmd.js -t [ reactify --harmony ] jsx/*.jsx > build/app.js

