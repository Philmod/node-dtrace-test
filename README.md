node-dtrace-test
================

Profiling node.js using d-trace on SmartOS

How to install SmartOS
----------------------
 - Go to https://download.joyent.com/pub/iso/ and download the latest.iso
 - Create a new VM (OS type: "Solaris 10 64bit")
 - Attach the SmartOS .iso file
 - Power the VM up
 - Networking option: 'dhcp'
 - The system reboots, then login
 - Grab the global zone IP address with the **ipdam show-addr** command, to use a SSH client 
 - Before creating the local zone, first **imgadm update** then **imgadm avail** to see the available templates to download and install
 - **imgadm import e8c41d40-f161-11e1-b839-a3631c115653** (or another template)
 - Once imgadm has finished importing the template, deploy a local zone from it with the vmadm command and JSON file with some parameters
```js
{
  "brand": "joyent",
  "dataset_uuid": "e8c41d40-f161-11e1-b839-a3631c115653",
  "max_physical_memory": 1024,
  "nics": [
    {
      "nic_tag": "admin",
      "ip": "dhcp",
      "gateway": "xxx.xxx.xxx.xxx"
    }
  ]
}
```
 - Put this file under /zones/zone.json (to survive to reboots)
 - **vmadm create -f /zones/zone.json**
 - Check that you rlocal zone is running : **vmadm list**
 - Log into the new local zone: **zlogin <UUID>**
 - That's it!

To get started, run **pkgin update** to get the lastest package database, then search the package you need with **pkgin search XXX**.
If pkgin is not installed: 
 - cd /
 - curl -k http://pkgsrc.joyent.com/sdc6/2012Q1/x86_64/bootstrap.tar.gz | gzcat | tar -xf -
 - pkg_admin rebuild
 - pkgin -y up