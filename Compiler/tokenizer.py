""" To recognize the keywords if, while, then, else, switch, int, float. Outputthe corresponding token <INT>, <WHILE>, <THEN>, <ELSE>, <SWITCH>, <INT>, <FLOAT>. """

import re

def tokenize(code):
    # Define regular expressions for each keyword
    if_pattern = re.compile(r'\bif\b')
    while_pattern = re.compile(r'\bwhile\b')
    then_pattern = re.compile(r'\bthen\b')
    else_pattern = re.compile(r'\belse\b')
    switch_pattern = re.compile(r'\bswitch\b')
    int_pattern = re.compile(r'\bint\b')
    float_pattern = re.compile(r'\bfloat\b')

    # Tokenize the code
    tokens = []
    for word in code.split():
        if if_pattern.match(word):
            tokens.append("<IF>")
        elif while_pattern.match(word):
            tokens.append("<WHILE>")
        elif then_pattern.match(word):
            tokens.append("<THEN>")
        elif else_pattern.match(word):
            tokens.append("<ELSE>")
        elif switch_pattern.match(word):
            tokens.append("<SWITCH>")
        elif int_pattern.match(word):
            tokens.append("<INT>")
        elif float_pattern.match(word):
            tokens.append("<FLOAT>")
        else:
            tokens.append(word)

    return tokens

# Test the program
code = "if x > 0 then y = 1 else y = -1"
tokens = tokenize(code)
print(tokens)
