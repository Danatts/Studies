#!/bin/bash

showuptime(){
	local up=$(uptime -p | cut -c4-) # Local makes variable only available on function scope
	local since=$(uptime -s)
	cat << EOF
---
This machine has been up for ${up}
It has been running sice ${since}
---
EOF
}

showuptime
