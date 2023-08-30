function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "mluksha.github.io"))
    return "DIRECT";

  if (shExpMatch(host, "*.onliner.by"))
    return "DIRECT";

  if (shExpMatch(host, "*.collaborate.center"))
    return "DIRECT";

  // collaborateeastusprimary-signalr-prod.service.signalr.net
  if (shExpMatch(host, "*.service.signalr.net"))
    return "DIRECT";

  // tabeebprod.blob.core.windows.net
  if (shExpMatch(host, "*.blob.core.windows.net"))
    return "DIRECT";

  // DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
  return "PROXY 192.168.68.41:8888";
}
