""" Implement a Finite Automatawhich recognizes the input if it is an integer or float number. If the input is an integer then output <NUM, the number>If the number is a float, then output <FLOAT, the number> """
import sys
def main():
    """ Main program """
    # Read the input
    input_string = sys.stdin.readline()
    # Remove the newline character
    input_string = input_string[:-1]
    # Check if the input is an integer
    if input_string.isdigit():
        print("<NUM, " + input_string + ">")
    # Check if the input is a float
    elif input_string.replace(".", "", 1).isdigit():
        print("<FLOAT, " + input_string + ">")
    else:
        print("Invalid Number")
if __name__ == "__main__":
    main()
