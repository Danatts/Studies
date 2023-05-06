#!/bin/bash

if [[ ${1,,} = herbert ]]; then
	echo "Oh, you are the boss. Welcome!"	
elif [[ ${1,,} = help ]]; then
	echo "Just enter your username, duh!"	
else
	echo "I dont know who you are"
fi
