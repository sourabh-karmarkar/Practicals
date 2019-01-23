"""
	Write a program which keeps prompting the user to guess a word. The user is allowed upto 10 guesses -
	write your code in such a way that the secret word and the number of allowed guesses are easy to change.
	Print messages to give the user feedback.
"""
guess_count = 0
secret_word = "ABC"
allowed_guesses = 20
while True:
	# Take word from the user
	guess_word=input("Guess a word : ")

	# Check if user-entered word is matching to secret word and print the message then break the loop
	if( guess_word == secret_word):
		print("Great, your guess is right!!")
		break
	print("Oops, wrong guess!!")

	# increment guess count
	guess_count += 1

	# if guess count matches the number of allowed guesses then print the message then break the loop
	if(guess_count == allowed_guesses):
		print("Sorry, limit reached!!")
		break
