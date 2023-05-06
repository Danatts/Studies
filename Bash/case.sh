case ${1,,} in
	daniel | admin) echo "Hello, you are the boss here!"
	;;
	help) echo "Just enter your username"
	;;
	*) echo "Hello there, enter a valid username"
	;;
esac
