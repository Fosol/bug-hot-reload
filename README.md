# Bug - React Hot Reload

React Hot Reload isn't working correctly.
It reloads after a change is made to a file, but then the page throws an error and is unresponsive.
The only solution is to manually refresh the page to get it working again.

I've seen the issue in a number of dependency versions over the past two days of debugging.
Not certain what the root cause is.

Additionally it appears that the WebSocket connection is hardcoded to `localhost:3000` too...
This is a secondary issue, but one that keeps showing up and blocks debugging the above issue.
Perhaps they are related...

## Run App

Run the docker-compose command to get up and running.

```bash
docker-compose up -d
```

View page [http://localhost:5000](http://localhost:5000).
