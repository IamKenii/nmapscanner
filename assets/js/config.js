// Nmap Configuration
// valueType opties:
// - null: geen extra waarde nodig
// - "text": vrije tekst invoer
// - "number": numerieke invoer
// - "ip": IP adres invoer
// - "ports": poort specificatie

const nmapConfig = {
    "scanTypes": {
        "name": "Scan Types",
        "options": [
            {"flag": "-sS", "name": "TCP SYN Scan", "desc": "Stealth scan (standaard)", "valueType": null},
            {"flag": "-sT", "name": "TCP Connect Scan", "desc": "Volledige TCP verbinding", "valueType": null},
            {"flag": "-sU", "name": "UDP Scan", "desc": "Scan UDP poorten", "valueType": null},
            {"flag": "-sA", "name": "TCP ACK Scan", "desc": "Detecteer firewall regels", "valueType": null},
            {"flag": "-sW", "name": "TCP Window Scan", "desc": "Window scan", "valueType": null},
            {"flag": "-sM", "name": "TCP Maimon Scan", "desc": "Maimon scan", "valueType": null},
            {"flag": "-sN", "name": "TCP Null Scan", "desc": "Null scan", "valueType": null},
            {"flag": "-sF", "name": "TCP FIN Scan", "desc": "FIN scan", "valueType": null},
            {"flag": "-sX", "name": "TCP Xmas Scan", "desc": "Xmas scan", "valueType": null},
            {"flag": "-sV", "name": "Version Detection", "desc": "Detecteer service versies", "valueType": null},
            {"flag": "-sC", "name": "Default Scripts", "desc": "Voer standaard NSE scripts uit", "valueType": null}
        ]
    },
    "hostDiscovery": {
        "name": "Host Discovery",
        "options": [
            {"flag": "-Pn", "name": "Skip Ping", "desc": "Behandel alle hosts als online", "valueType": null},
            {"flag": "-PS", "name": "TCP SYN Ping", "desc": "TCP SYN discovery", "valueType": "ports", "placeholder": "22,80,443"},
            {"flag": "-PA", "name": "TCP ACK Ping", "desc": "TCP ACK discovery", "valueType": "ports", "placeholder": "22,80,443"},
            {"flag": "-PU", "name": "UDP Ping", "desc": "UDP discovery", "valueType": "ports", "placeholder": "53,161"},
            {"flag": "-PE", "name": "ICMP Echo Ping", "desc": "ICMP echo request", "valueType": null},
            {"flag": "-PP", "name": "ICMP Timestamp Ping", "desc": "ICMP timestamp", "valueType": null},
            {"flag": "-PM", "name": "ICMP Netmask Ping", "desc": "ICMP netmask", "valueType": null}
        ]
    },
    "portSpecification": {
        "name": "Port Specificatie",
        "options": [
            {"flag": "-p-", "name": "All Ports", "desc": "Scan alle 65535 poorten", "valueType": null},
            {"flag": "-p", "name": "Custom Ports", "desc": "Specifieke poorten of ranges", "valueType": "ports", "placeholder": "80,443,8000-9000"},
            {"flag": "-F", "name": "Fast Scan", "desc": "Scan 100 meest voorkomende poorten", "valueType": null},
            {"flag": "--top-ports", "name": "Top Ports", "desc": "Scan top N poorten", "valueType": "number", "placeholder": "100"},
            {"flag": "--port-ratio", "name": "Port Ratio", "desc": "Scan poorten boven ratio", "valueType": "number", "placeholder": "0.1"}
        ]
    },
    "timingPerformance": {
        "name": "Timing & Performance",
        "options": [
            {"flag": "-T0", "name": "Paranoid", "desc": "Extreem langzaam (IDS evasion)", "valueType": null},
            {"flag": "-T1", "name": "Sneaky", "desc": "Zeer langzaam", "valueType": null},
            {"flag": "-T2", "name": "Polite", "desc": "Langzaam", "valueType": null},
            {"flag": "-T3", "name": "Normal", "desc": "Standaard snelheid", "valueType": null},
            {"flag": "-T4", "name": "Aggressive", "desc": "Snel (aanbevolen)", "valueType": null},
            {"flag": "-T5", "name": "Insane", "desc": "Zeer snel", "valueType": null},
            {"flag": "--min-rate", "name": "Min Rate", "desc": "Minimum packets per seconde", "valueType": "number", "placeholder": "100"},
            {"flag": "--max-rate", "name": "Max Rate", "desc": "Maximum packets per seconde", "valueType": "number", "placeholder": "1000"},
            {"flag": "--min-parallelism", "name": "Min Parallelism", "desc": "Minimum parallelle probes", "valueType": "number", "placeholder": "10"},
            {"flag": "--max-parallelism", "name": "Max Parallelism", "desc": "Maximum parallelle probes", "valueType": "number", "placeholder": "100"},
            {"flag": "--host-timeout", "name": "Host Timeout", "desc": "Timeout per host (ms)", "valueType": "text", "placeholder": "30m"}
        ]
    },
    "osDetection": {
        "name": "OS & Service Detection",
        "options": [
            {"flag": "-O", "name": "OS Detection", "desc": "Detecteer besturingssysteem", "valueType": null},
            {"flag": "-A", "name": "Aggressive Scan", "desc": "OS, versie, script, traceroute", "valueType": null},
            {"flag": "--osscan-guess", "name": "Guess OS", "desc": "Agressiever OS detectie", "valueType": null},
            {"flag": "--osscan-limit", "name": "OS Scan Limit", "desc": "Limiteer OS detectie", "valueType": null},
            {"flag": "--version-intensity", "name": "Version Intensity", "desc": "Versie detectie intensiteit (0-9)", "valueType": "number", "placeholder": "5"},
            {"flag": "--version-light", "name": "Light Version", "desc": "Lichte versie detectie", "valueType": null},
            {"flag": "--version-all", "name": "All Version", "desc": "Probeer elke probe", "valueType": null}
        ]
    },
    "nseScripts": {
        "name": "NSE Scripts",
        "options": [
            {"flag": "--script=default", "name": "Default Scripts", "desc": "Standaard script set", "valueType": null},
            {"flag": "--script=vuln", "name": "Vulnerability Scan", "desc": "Scan naar bekende kwetsbaarheden", "valueType": null},
            {"flag": "--script=exploit", "name": "Exploit Scripts", "desc": "Exploit scripts", "valueType": null},
            {"flag": "--script=auth", "name": "Auth Scripts", "desc": "Authenticatie scripts", "valueType": null},
            {"flag": "--script=brute", "name": "Brute Force", "desc": "Brute force scripts", "valueType": null},
            {"flag": "--script=discovery", "name": "Discovery Scripts", "desc": "Discovery scripts", "valueType": null},
            {"flag": "--script=dos", "name": "DoS Scripts", "desc": "Denial of Service scripts", "valueType": null},
            {"flag": "--script=malware", "name": "Malware Detection", "desc": "Detecteer malware", "valueType": null},
            {"flag": "--script", "name": "Custom Script", "desc": "Specifieke script(s)", "valueType": "text", "placeholder": "http-title,ssl-cert"},
            {"flag": "--script-args", "name": "Script Arguments", "desc": "Argumenten voor scripts", "valueType": "text", "placeholder": "user=admin,pass=test"}
        ]
    },
    "firewallEvasion": {
        "name": "Firewall/IDS Evasion",
        "options": [
            {"flag": "-f", "name": "Fragment Packets", "desc": "Fragmenteer packets", "valueType": null},
            {"flag": "--mtu", "name": "MTU Size", "desc": "Aangepaste MTU grootte", "valueType": "number", "placeholder": "24"},
            {"flag": "-D", "name": "Decoy Scan", "desc": "Gebruik decoy IP's", "valueType": "text", "placeholder": "RND:10 of ME,192.168.1.5"},
            {"flag": "-S", "name": "Spoof Source", "desc": "Vervals bron IP", "valueType": "ip", "placeholder": "192.168.1.100"},
            {"flag": "-e", "name": "Interface", "desc": "Gebruik specifieke interface", "valueType": "text", "placeholder": "eth0"},
            {"flag": "--source-port", "name": "Source Port", "desc": "Gebruik specifieke bron poort", "valueType": "number", "placeholder": "53"},
            {"flag": "--data-length", "name": "Data Length", "desc": "Append random data", "valueType": "number", "placeholder": "200"},
            {"flag": "--randomize-hosts", "name": "Randomize Hosts", "desc": "Randomiseer volgorde", "valueType": null},
            {"flag": "--spoof-mac", "name": "Spoof MAC", "desc": "Vervals MAC adres", "valueType": "text", "placeholder": "0 of AA:BB:CC:DD:EE:FF"},
            {"flag": "--badsum", "name": "Bad Checksum", "desc": "Verzend packets met foute checksum", "valueType": null},
            {"flag": "--ttl", "name": "TTL Value", "desc": "Stel IP TTL in", "valueType": "number", "placeholder": "64"}
        ]
    },
    "output": {
        "name": "Output Opties",
        "options": [
            {"flag": "-oN", "name": "Normal Output", "desc": "Normale output naar bestand", "valueType": "text", "placeholder": "output.txt"},
            {"flag": "-oX", "name": "XML Output", "desc": "XML output", "valueType": "text", "placeholder": "output.xml"},
            {"flag": "-oG", "name": "Grepable Output", "desc": "Grepable formaat", "valueType": "text", "placeholder": "output.grep"},
            {"flag": "-oA", "name": "All Formats", "desc": "Output in alle formaten", "valueType": "text", "placeholder": "output"},
            {"flag": "-v", "name": "Verbose", "desc": "Uitgebreide output", "valueType": null},
            {"flag": "-vv", "name": "Very Verbose", "desc": "Zeer uitgebreide output", "valueType": null},
            {"flag": "-d", "name": "Debug", "desc": "Debug mode", "valueType": null},
            {"flag": "-dd", "name": "More Debug", "desc": "Meer debug info", "valueType": null},
            {"flag": "--reason", "name": "Show Reason", "desc": "Toon reden voor poort status", "valueType": null},
            {"flag": "--open", "name": "Only Open", "desc": "Toon alleen open poorten", "valueType": null},
            {"flag": "--packet-trace", "name": "Packet Trace", "desc": "Toon verzonden/ontvangen packets", "valueType": null},
            {"flag": "--append-output", "name": "Append Output", "desc": "Voeg toe aan bestaande output", "valueType": null}
        ]
    },
    "misc": {
        "name": "Overige Opties",
        "options": [
            {"flag": "-6", "name": "IPv6", "desc": "Enable IPv6 scanning", "valueType": null},
            {"flag": "-n", "name": "No DNS", "desc": "Geen DNS resolutie", "valueType": null},
            {"flag": "-R", "name": "Always DNS", "desc": "Altijd DNS resolutie", "valueType": null},
            {"flag": "--dns-servers", "name": "DNS Servers", "desc": "Aangepaste DNS servers", "valueType": "text", "placeholder": "8.8.8.8,1.1.1.1"},
            {"flag": "--traceroute", "name": "Traceroute", "desc": "Trace pad naar host", "valueType": null},
            {"flag": "--privileged", "name": "Privileged", "desc": "Assume privileges", "valueType": null},
            {"flag": "--unprivileged", "name": "Unprivileged", "desc": "Assume no privileges", "valueType": null},
            {"flag": "-iL", "name": "Input from File", "desc": "Lees targets van bestand", "valueType": "text", "placeholder": "targets.txt"},
            {"flag": "--exclude", "name": "Exclude Hosts", "desc": "Exclusief hosts/netwerken", "valueType": "text", "placeholder": "192.168.1.1"},
            {"flag": "--excludefile", "name": "Exclude File", "desc": "Exclusief hosts van bestand", "valueType": "text", "placeholder": "exclude.txt"}
        ]
    }
};
