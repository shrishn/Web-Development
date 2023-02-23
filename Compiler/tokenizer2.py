import re

def tokenize(code):
    # Define regular expressions for each token
    id_pattern = re.compile(r'[a-zA-Z_]\w*')
    num_pattern = re.compile(r'\d+(\.\d+)?')
    op_pattern = re.compile(r'[-+*/%=<>&|!]')
    semi_pattern = re.compile(r';')

    # Tokenize the code
    tokens = []
    for word in code.split():
        if id_pattern.match(word):
            tokens.append("<ID, {}>".format(word))
        elif num_pattern.match(word):
            tokens.append("<NUM, {}>".format(word))
        elif op_pattern.match(word):
            tokens.append("<{}>".format(word))
        elif semi_pattern.match(word):
            tokens.append("<SEMI>")
        else:
            raise ValueError("Invalid character: {}".format(word))

    return tokens

# Test the program
code = "a = b * 100;"
tokens = tokenize(code)
print(tokens)
