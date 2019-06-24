## PROGRESSIVE WEB APP (PWA)

#### Some important links used

- https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/

#### Generate API key for weather data

- Got to the following website, [Dark Sky Weather API](https://darksky.net) and generate the API key.

It's easy to use, and free for non-commercial projects.

#### Clone the GIT repo

- [PWA App Github](https://github.com/googlecodelabs/your-first-pwapp.git)

#### Setting up locally

- Run the following command to install the dependencies

```
npm install
```

- Edit **server.js** and set your DarkSky API key.

* Run the following command to start the server on port 8000

```
node server.js
```

- Install the **lighthouse** plugin given by google from chrome web store

#### Service worker lifecycle events

- ##### install

  - The first event a service worker gets is install. It's triggered as soon as the worker executes, and it's only called once per service worker. If you alter your service worker script the browser considers it a different service worker, and it'll get its own install event. Typically the install event is used to cache everything you need for your app to run.

- ##### activate

  - The service worker will receive an activate event every time it starts up. The main purpose of the activate event is to configure the service worker's behavior, clean up any resources left behind from previous runs (e.g. old caches), and get the service worker ready to handle network requests (for example the fetch event described below).

- ##### fetch

  - The fetch event allows the service worker to intercept any network requests and handle requests. It can go to the network to get the resource, it can pull it from its own cache, generate a custom response or any number of different options.
