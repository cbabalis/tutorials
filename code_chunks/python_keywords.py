import sys
import fileinput

class Keywords:
    """ This is a class containing keywords.
    """

    def __init__(self):
        pass


    def replace_line_in_file(self, a_file, keyword_to_find, replace_line):
        """ This method opens a file and searches for a keyword in it and
            it replaces it with the replace_line string.

            :param string a_file: [mandatory] is the file to be searched
                and updated.
            :param string keyword_to_find: [mandatory] the keyword to be
                found inside the file.
            :param string replace_line: [mandatory] the replace line.
        """
        for line in fileinput.input(a_file, inplace=1):
            if keyword_to_find in line:
                line = replace_line + '\n'
            sys.stdout.write(line)

    def replace_value(self, a_file, key, replace_value, delimiter='='):
        """ Method to replace a value in a given file.

        :param string a_file: is a the file containing the key we want
            to replace.
        :param string key: is the key.
        :param string replace_value: is the value which will replace
            the default one.
        :param string delimiter: [optional] the delimiter between key
            and value.
        """
        text = ''
        with open(a_file, 'r') as f:
            for line in f.readlines():
                if key in line:
                    temp_line = line.split(delimiter)[0]
                    line = temp_line + delimiter + str(replace_value) +'\n'
                text += line

        if not text:
            print "No such key could be found..."

        with open(a_file, 'w') as f:
            f.write(text)
