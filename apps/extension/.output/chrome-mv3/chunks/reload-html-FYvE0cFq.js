(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function initPlugins() {
}
try {
  initPlugins();
} catch (err) {
  console.error("[wxt] Failed to initialize plugins", err);
}
function print(method, ...args) {
  if (typeof args[0] === "string") {
    const message = args.shift();
    method(`[wxt] ${message}`, ...args);
  } else {
    method("[wxt]", ...args);
  }
}
var logger = {
  debug: (...args) => print(console.debug, ...args),
  log: (...args) => print(console.log, ...args),
  warn: (...args) => print(console.warn, ...args),
  error: (...args) => print(console.error, ...args)
};
function setupWebSocket(onMessage) {
  const serverUrl = `${"ws:"}//${"localhost"}:${3e3}`;
  logger.debug("Connecting to dev server @", serverUrl);
  const ws = new WebSocket(serverUrl, "vite-hmr");
  ws.addEventListener("open", () => {
    logger.debug("Connected to dev server");
  });
  ws.addEventListener("close", () => {
    logger.debug("Disconnected from dev server");
  });
  ws.addEventListener("error", (event) => {
    logger.error("Failed to connect to dev server", event);
  });
  ws.addEventListener("message", (e) => {
    var _a, _b;
    try {
      const message = JSON.parse(e.data);
      if (message.type === "custom" && ((_b = (_a = message.event) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "wxt:"))) {
        onMessage == null ? void 0 : onMessage(message);
      }
    } catch (err) {
      logger.error("Failed to handle message", err);
    }
  });
  return ws;
}
{
  try {
    setupWebSocket((message) => {
      if (message.event === "wxt:reload-page") {
        if (message.data === location.pathname.substring(1)) {
          location.reload();
        }
      }
    });
  } catch (err) {
    logger.error("Failed to setup web socket connection with dev server", err);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2FkLWh0bWwtRll2RTBjRnEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4xOC42X0B0eXBlcytub2RlQDIwLjExLjI0X3JvbGx1cEA0LjIxLjIvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3ZpcnR1YWwvcmVsb2FkLWh0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3NhbmRib3gvdXRpbHMvbG9nZ2VyLnRzXG5mdW5jdGlvbiBwcmludChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFID09PSBcInByb2R1Y3Rpb25cIilcbiAgICByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzLnNoaWZ0KCk7XG4gICAgbWV0aG9kKGBbd3h0XSAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kKFwiW3d4dF1cIiwgLi4uYXJncyk7XG4gIH1cbn1cbnZhciBsb2dnZXIgPSB7XG4gIGRlYnVnOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5kZWJ1ZywgLi4uYXJncyksXG4gIGxvZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUubG9nLCAuLi5hcmdzKSxcbiAgd2FybjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUud2FybiwgLi4uYXJncyksXG4gIGVycm9yOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5lcnJvciwgLi4uYXJncylcbn07XG5cbi8vIHNyYy92aXJ0dWFsL3V0aWxzL3NldHVwLXdlYi1zb2NrZXQudHNcbmZ1bmN0aW9uIHNldHVwV2ViU29ja2V0KG9uTWVzc2FnZSkge1xuICBjb25zdCBzZXJ2ZXJVcmwgPSBgJHtfX0RFVl9TRVJWRVJfUFJPVE9DT0xfX30vLyR7X19ERVZfU0VSVkVSX0hPU1ROQU1FX199OiR7X19ERVZfU0VSVkVSX1BPUlRfX31gO1xuICBsb2dnZXIuZGVidWcoXCJDb25uZWN0aW5nIHRvIGRldiBzZXJ2ZXIgQFwiLCBzZXJ2ZXJVcmwpO1xuICBjb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoc2VydmVyVXJsLCBcInZpdGUtaG1yXCIpO1xuICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB7XG4gICAgbG9nZ2VyLmRlYnVnKFwiQ29ubmVjdGVkIHRvIGRldiBzZXJ2ZXJcIik7XG4gIH0pO1xuICB3cy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIkRpc2Nvbm5lY3RlZCBmcm9tIGRldiBzZXJ2ZXJcIik7XG4gIH0pO1xuICB3cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGV2ZW50KSA9PiB7XG4gICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gZGV2IHNlcnZlclwiLCBldmVudCk7XG4gIH0pO1xuICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJjdXN0b21cIiAmJiBtZXNzYWdlLmV2ZW50Py5zdGFydHNXaXRoPy4oXCJ3eHQ6XCIpKSB7XG4gICAgICAgIG9uTWVzc2FnZT8uKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIGhhbmRsZSBtZXNzYWdlXCIsIGVycik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHdzO1xufVxuXG4vLyBzcmMvdmlydHVhbC9yZWxvYWQtaHRtbC50c1xuaWYgKGltcG9ydC5tZXRhLmVudi5DT01NQU5EID09PSBcInNlcnZlXCIpIHtcbiAgdHJ5IHtcbiAgICBzZXR1cFdlYlNvY2tldCgobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09IFwid3h0OnJlbG9hZC1wYWdlXCIpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YSA9PT0gbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpKSB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIHNldHVwIHdlYiBzb2NrZXQgY29ubmVjdGlvbiB3aXRoIGRldiBzZXJ2ZXJcIiwgZXJyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBUyxNQUFNLFdBQVcsTUFBTTtBQUc5QixNQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sVUFBVTtBQUN6QixVQUFBLFVBQVUsS0FBSztBQUNyQixXQUFPLFNBQVMsT0FBTyxJQUFJLEdBQUcsSUFBSTtBQUFBLEVBQUEsT0FDN0I7QUFDRSxXQUFBLFNBQVMsR0FBRyxJQUFJO0FBQUEsRUFDekI7QUFDRjtBQUNBLElBQUksU0FBUztBQUFBLEVBQ1gsT0FBTyxJQUFJLFNBQVMsTUFBTSxRQUFRLE9BQU8sR0FBRyxJQUFJO0FBQUEsRUFDaEQsS0FBSyxJQUFJLFNBQVMsTUFBTSxRQUFRLEtBQUssR0FBRyxJQUFJO0FBQUEsRUFDNUMsTUFBTSxJQUFJLFNBQVMsTUFBTSxRQUFRLE1BQU0sR0FBRyxJQUFJO0FBQUEsRUFDOUMsT0FBTyxJQUFJLFNBQVMsTUFBTSxRQUFRLE9BQU8sR0FBRyxJQUFJO0FBQ2xEO0FBR0EsU0FBUyxlQUFlLFdBQVc7QUFDakMsUUFBTSxZQUFZLEdBQUcsS0FBdUIsS0FBSyxXQUF1QixJQUFJLEdBQW1CO0FBQ3hGLFNBQUEsTUFBTSw4QkFBOEIsU0FBUztBQUNwRCxRQUFNLEtBQUssSUFBSSxVQUFVLFdBQVcsVUFBVTtBQUMzQyxLQUFBLGlCQUFpQixRQUFRLE1BQU07QUFDaEMsV0FBTyxNQUFNLHlCQUF5QjtBQUFBLEVBQUEsQ0FDdkM7QUFDRSxLQUFBLGlCQUFpQixTQUFTLE1BQU07QUFDakMsV0FBTyxNQUFNLDhCQUE4QjtBQUFBLEVBQUEsQ0FDNUM7QUFDRSxLQUFBLGlCQUFpQixTQUFTLENBQUMsVUFBVTtBQUMvQixXQUFBLE1BQU0sbUNBQW1DLEtBQUs7QUFBQSxFQUFBLENBQ3REO0FBQ0UsS0FBQSxpQkFBaUIsV0FBVyxDQUFDLE1BQU07O0FBQ2hDLFFBQUE7QUFDRixZQUFNLFVBQVUsS0FBSyxNQUFNLEVBQUUsSUFBSTtBQUNqQyxVQUFJLFFBQVEsU0FBUyxjQUFZLG1CQUFRLFVBQVIsbUJBQWUsZUFBZiw0QkFBNEIsVUFBUztBQUNwRSwrQ0FBWTtBQUFBLE1BQ2Q7QUFBQSxhQUNPLEtBQUs7QUFDTCxhQUFBLE1BQU0sNEJBQTRCLEdBQUc7QUFBQSxJQUM5QztBQUFBLEVBQUEsQ0FDRDtBQUNNLFNBQUE7QUFDVDtBQUd5QztBQUNuQyxNQUFBO0FBQ0YsbUJBQWUsQ0FBQyxZQUFZO0FBQ3RCLFVBQUEsUUFBUSxVQUFVLG1CQUFtQjtBQUN2QyxZQUFJLFFBQVEsU0FBUyxTQUFTLFNBQVMsVUFBVSxDQUFDLEdBQUc7QUFDbkQsbUJBQVMsT0FBTztBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQUEsQ0FDRDtBQUFBLFdBQ00sS0FBSztBQUNMLFdBQUEsTUFBTSx5REFBeUQsR0FBRztBQUFBLEVBQzNFO0FBQ0Y7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
