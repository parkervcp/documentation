(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{352:function(e,t,o){e.exports=o.p+"assets/img/pterodactyl_add_node_create_button.1a29979f.png"},353:function(e,t,o){e.exports=o.p+"assets/img/pterodactyl_add_node_new_page.f359059a.png"},354:function(e,t,o){e.exports=o.p+"assets/img/pterodactyl_add_node_config.6ae87ba2.png"},368:function(e,t,o){"use strict";o.r(t);var a=o(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-new-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-node"}},[e._v("#")]),e._v(" Creating a New Node")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#location"}},[e._v("Location")])]),a("li",[a("a",{attrs:{href:"#information-required"}},[e._v("Information Required")])]),a("li",[a("a",{attrs:{href:"#install-the-daemon"}},[e._v("Install the Daemon")])]),a("li",[a("a",{attrs:{href:"#configuring-the-node"}},[e._v("Configuring the Node")]),a("ul",[a("li",[a("a",{attrs:{href:"#auto-deploy"}},[e._v("Auto-Deploy")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" Location")]),e._v(" "),a("p",[e._v("Head to the admin panel and click the Nodes tab on the left sidebar. After that, click 'Create New' on the\ntop right side to open the page to add a node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(352),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"information-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#information-required"}},[e._v("#")]),e._v(" Information Required")]),e._v(" "),a("p",[a("img",{attrs:{src:o(353),alt:""}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Name")]),e._v(": a quick identifiable name for the daemon")]),e._v(" "),a("li",[a("strong",[e._v("Description")]),e._v(": a long description that is used to help you identify the node.")]),e._v(" "),a("li",[a("strong",[e._v("Location")]),e._v(": the location you want the node in. These are configured in the 'Locations' section of the panel and one\nmust be created before a node can be created. These simply act as categories for nodes and serve no other purpose at\nthis time.")]),e._v(" "),a("li",[a("strong",[e._v("FQDN")]),e._v(": the fully qualified domain name for the node — for example: "),a("code",[e._v("node.demon.pterodactyl.io")])]),e._v(" "),a("li",[a("strong",[e._v("Communicate over SSL")]),e._v(": if the panel is using SSL the Daemon is required to use SSL as well.")]),e._v(" "),a("li",[a("strong",[e._v("Behind Proxy")]),e._v(": if you have the Daemon behind a proxy that terminates SSL connections before arriving at the Daemon\nthen this option should be selected. If none of that sentence made sense, this doesn't affect you.")]),e._v(" "),a("li",[a("strong",[e._v("Server File Directory")]),e._v(": the location on the physical server where the daemon is to store the files the servers\ngenerate. By default this is "),a("code",[e._v("/srv/daemon-data")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("OVH Users")]),e._v(" "),a("p",[e._v("Some OVH users regularly have their "),a("code",[e._v("/home")]),e._v(" folder be the largest filesystem. You may want to change to use\n"),a("code",[e._v("/home/daemon-data")]),e._v(" if you are on a default OVH box.")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Total Memory")]),e._v(": the total amount of RAM the node should be able to allocate automatically.")]),e._v(" "),a("li",[a("strong",[e._v("Memory Overallocate")]),e._v(": the percentage of RAM to over-allocate on a node. For example, if you have set a 10GB memory\nlimit, with a 20% overallocation, the Panel will allocate up to 12GB of memory on this node in total.")]),e._v(" "),a("li",[a("strong",[e._v("Total Disk Space")]),e._v(": the total amount of disk space the node should be able to allocate automatically.")]),e._v(" "),a("li",[a("strong",[e._v("Disk Overallocate")]),e._v(": works the same way as memory overallocation.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("Don't forget to account for OS overhead and other software requirements on machines.")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Daemon Port")]),e._v(": the port that the Daemon should listen on.")]),e._v(" "),a("li",[a("strong",[e._v("Daemon SFTP Port")]),e._v(": the port the Daemon sftp-server or standalone SFTP server should listen on.")])]),e._v(" "),a("h2",{attrs:{id:"install-the-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-daemon"}},[e._v("#")]),e._v(" Install the Daemon")]),e._v(" "),a("p",[e._v("At this point you'll need to have the Daemon installed on your machine. Check out the "),a("RouterLink",{attrs:{to:"/daemon/installing.html"}},[e._v("documentation")]),e._v("\nfor more information, or try one of the community guides for "),a("RouterLink",{attrs:{to:"/community/installation-guides/daemon/centos7.html"}},[e._v("CentOS")]),e._v(",\n"),a("RouterLink",{attrs:{to:"/community/installation-guides/daemon/ubuntu1804.html"}},[e._v("Ubuntu")]),e._v(", or "),a("RouterLink",{attrs:{to:"/community/installation-guides/daemon/debian9.html"}},[e._v("Debian")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"configuring-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-node"}},[e._v("#")]),e._v(" Configuring the Node")]),e._v(" "),a("p",[e._v("Go to the Node Configuration page")]),e._v(" "),a("p",[a("img",{attrs:{src:o(354),alt:""}})]),e._v(" "),a("p",[e._v("Copy and paste the config into the "),a("code",[e._v("core.json")]),e._v(" file. (Default location is "),a("code",[e._v("/srv/daemon/config/core.json")]),e._v(")")]),e._v(" "),a("h3",{attrs:{id:"auto-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-deploy"}},[e._v("#")]),e._v(" Auto-Deploy")]),e._v(" "),a("p",[e._v("This will generate a command to run on the node server to configure the daemon for you. (This needs to be run in the  "),a("code",[e._v("/srv/daemon")]),e._v(" folder, or "),a("code",[e._v("/home/daemon")]),e._v(" if you're using the "),a("code",[e._v("/home")]),e._v(" directory to store the Daemon)")])])}),[],!1,null,null,null);t.default=n.exports}}]);