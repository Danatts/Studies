#!/bin/bash

MY_FIRST_LIST=(one two three four five)

for item in ${MY_FIRST_LIST[@]}
do
	echo "$item"
done

for item in ${MY_FIRST_LIST[@]}
do
	echo "Count: $(echo -n $item | wc -c)" 
done
