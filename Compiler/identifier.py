""" Program to recognize ifthe input is a valid identifier or not.Sample outputEnter an input : abd23Output: <ID, abd23>Enter an output: 23bOutput: Invalid identifier """
import sys
def main():
    """ Main program """
    # Read the input
    input_string = sys.stdin.readline()
    # Remove the newline character
    input_string = input_string[:-1]
    # Check if the input is an integer
    if input_string.isdigit():
        print("Invalid identifier")
    # Check if the input is a float
    elif input_string.replace(".", "", 1).isdigit():
        print("Invalid identifier")
    # Check if the input is a valid identifier
    elif input_string.isidentifier():
        print("<ID, " + input_string + ">")
    else:
        print("Invalid identifier")
if __name__ == "__main__":
    main()