function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "mluksha.github.io"))
    return "DIRECT";

  // If the hostname matches, send direct. 
  if (dnsDomainIs(host, "onliner.by"))
    return "DIRECT";

  // DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
  return "PROXY 192.168.68.41:8888";
}
