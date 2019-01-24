if __name__ == '__main__':
    s = input()
    
    # flags for alphanumeric, alphabet, digit, lowercase, uppercase
    alpha_flag = False
    alphabet_flag = False
    digit_flag = False
    lower_flag = False
    upper_flag = False

    # change the flag value to true based on each character fetched from string
    for char in s:
        if char.isalnum():
            alpha_flag = True
        if char.isalpha():
            alphabet_flag = True
        if char.isdigit():
            digit_flag = True
        if char.islower():
            lower_flag = True
        if char.isupper():
            upper_flag = True
        
    # print all the flags
    print(alpha_flag)
    print(alphabet_flag)
    print(digit_flag)
    print(lower_flag)
    print(upper_flag)