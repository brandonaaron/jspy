/*! Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

var jspy = {};
jspy.string = {
	/**
	 * Return a copy of the string with only its first character capitalized.
	 */
	capitalize: function(str) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	},
	
	/**
	 * Return centered in a string of length width. Padding is done using the specified fillchar (default is a space).
	 */
	center: function(str, width, fillchar) {
		fillchar = fillchar || " ";
		var length = str.length,
		    padamount = (width - length)/2;
		for (var i=padamount; i>0; i--)
			str = fillchar + str;
		for (var i=padamount; i>0 && str.length<width; i--)
			str = str + fillchar;
		return str;
	},
	
	/**
	 * Return the number of occurrences of substring sub in string S[start:end]. Optional arguments start and end are interpreted as in slice notation.
	 */
	count: function(str, sub, start, end) {
		return str.slice(start || 0, end || str.length).match(new RegExp(sub, "g")).length;
	},
	
	/**
	 * Return True if the string ends with the specified suffix, otherwise return False. suffix can also be an Array of suffixes to look for. With optional start, test beginning at that position. With optional end, stop comparing at that position.
	 */
	endswith: function(str, suffix, start, end) {
		var tempstr, rtn = false;
		if (suffix.constructor == Array) {
			for (var i=0; i<suffix.length; i++) 
				if ( (rtn = jspy.string.endswith(str, suffix[i], start, end)) ) break;
		} else {
			tempstr = str.slice(start || 0, end || str.length);
			rtn = tempstr.lastIndexOf(suffix)+suffix.length == tempstr.length;
		}
		return rtn;
	},
	
	/**
	 * Return a copy of the string where all tab characters are expanded using spaces. If tabsize is not given, a tab size of 8 characters is assumed.
	 */
	expandtabs: function(str, tabsize) {
		tabsize = tabsize != undefined ? tabsize : 8;
		var tempstr = "";
		for (var i=0;i<tabsize;i++)
			tempstr += " ";
		return str.replace(/\t/g, tempstr);
	},
	
	/**
	 * Return the lowest index in the string where substring sub is found, such that sub is contained in the range [start, end]. Optional arguments start and end are interpreted as in slice notation. Return -1 if sub is not found.
	 */
	find: function(str, sub, start, end) {
		return str.slice(start || 0, end || str.length).indexOf(sub);
	},
	
	/**
	 * Like find(), but raise ValueError when the substring is not found.
	 */
	index: function(str, sub, start, end) {
		var index = jspy.string.find.apply(this, arguments);
		if (index == -1)
			throw "ValueError: substring not found";
		return index;
	},
	
	/**
	 * Return true if all characters in the string are alphanumeric and there is at least one character, false otherwise.
	 */
	isalnum: function(str) {
		return !!str.match(/^\w+$/);
	},
	
	/**
	 * Return true if all characters in the string are alphabetic and there is at least one character, false otherwise.
	 */
	isalpha: function(str) {
		return !!str.match(/^\D+$/);
	},
	
	/**
	 * Return true if all characters in the string are digits and there is at least one character, false otherwise.
	 */
	isdigit: function(str) {
		return !!str.match(/^\d+$/);
	},

	/**
	 * Return true if all cased characters in the string are lowercase and there is at least one cased character, false otherwise.
	 */
	islower: function(str) {
		return !!str.match(/\D+/g) && str == str.toLowerCase();
	},
	
	/** 
	 * Return true if there are only whitespace characters in the string and there is at least one character, false otherwise.
	 */
	isspace: function(str) {
		return !!str.match(/^\s+$/g);
	},
	
	/** 
	 * Return true if the string is a titlecased string and there is at least one character, for example uppercase characters may only follow uncased characters and lowercase characters only cased ones. Return false otherwise.
	 */
	istitle: function(ste) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return true if all cased characters in the string are uppercase and there is at least one cased character, false otherwise.
	 *
	 * @name isupper
	 * @type Boolean
	 */
	isupper: function(str) {
		return !!str.match(/\D+/g) && str == str.toUpperCase();
	},
	
	/**
	 * Return a string which is the concatenation of the strings in the sequence seq. The separator between elements is the string providing this method.
	 */
	//join
	
	/**
	 * Return the string left justified in a string of length width. Padding is done using the specified fillchar (default is a space). The original string is returned if width is less than len(s).
	 */
	ljust: function(str, width, fillchar) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string converted to lowercase.
	 */
	lower: function(str) {
		return str.toLowerCase();
	},
	
	/**
	 * Return a copy of the string with leading characters removed. The chars argument is a string specifying the set of characters to be removed. If omitted or None, the chars argument defaults to removing whitespace. The chars argument is not a prefix; rather, all combinations of its values are stripped:
	 */
	lstrip: function(str, chars) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Split the string at the first occurrence of sep, and return a 3-tuple containing the part before the separator, the separator itself, and the part after the separator. If the separator is not found, return a 3-tuple containing the string itself, followed by two empty strings.
	 */
	partition: function(str) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string with all occurrences of substring old replaced by new. If the optional argument count is given, only the first count occurrences are replaced.
	 */
	// replace: function(str, oldStr, newStr, count) {
	// 	// TODO: implement
	// 	return str;
	// },
	
	/**
	 * Return the highest index in the string where substring sub is found, such that sub is contained within s[start,end]. Optional arguments start and end are interpreted as in slice notation. Return -1 on failure.
	 */
	rfind: function(str, sub, start, end) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Like rfind() but raises ValueError when the substring sub is not found.
	 */
	rindex: function(str, sub, start, end) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return the string right justified in a string of length width. Padding is done using the specified fillchar (default is a space). The original string is returned if width is less than len(s).
	 */
	rjust: function(str, width, fillchar) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Split the string at the last occurrence of sep, and return a 3-tuple containing the part before the separator, the separator itself, and the part after the separator. If the separator is not found, return a 3-tuple containing two empty strings, followed by the string itself.
	 */
	rpartition: function(str, sep) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a list of the words in the string, using sep as the delimiter string. If maxsplit is given, at most maxsplit splits are done, the rightmost ones. If sep is not specified or None, any whitespace string is a separator. Except for splitting from the right, rsplit() behaves like split() which is described in detail below.
	 */
	rsplit: function(str, sep, maxsplit) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string with trailing characters removed. The chars argument is a string specifying the set of characters to be removed. If omitted or None, the chars argument defaults to removing whitespace. The chars argument is not a suffix; rather, all combinations of its values are stripped:
	 */
	rstrip: function(str, chars) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a list of the words in the string, using sep as the delimiter string. If maxsplit is given, at most maxsplit splits are done. (thus, the list will have at most maxsplit+1 elements). If maxsplit is not specified, then there is no limit on the number of splits (all possible splits are made). Consecutive delimiters are not grouped together and are deemed to delimit empty strings (for example, "'1„2'.split(',')"returns "['1', '', '2']"). The sep argument may consist of multiple characters (for example, "'1, 2, 3'.split(', ')" returns "['1', '2', '3']"). Splitting an empty string with a specified separator returns "['']".
	 *
	 * If sep is not specified or is None, a different splitting algorithm is applied. First, whitespace characters (spaces, tabs, newlines, returns, and formfeeds) are stripped from both ends. Then, words are separated by arbitrary length strings of whitespace characters. Consecutive whitespace delimiters are treated as a single delimiter ("'1 2 3'.split()" returns "['1', '2', '3']"). Splitting an empty string or a string consisting of just whitespace returns an empty list. 
	 */
	// split: function(str, sep, maxsplit) {
	// 	// TODO: implement
	// 	return str;
	// },
	
	/**
	 * Return a list of the lines in the string, breaking at line boundaries. Line breaks are not included in the resulting list unless keepends is given and true.
	 */
	splitlines: function(str, keepends) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return True if string starts with the prefix, otherwise return False. prefix can also be an Array of suffixes to look for. With optional start, test string beginning at that position. With optional end, stop comparing string at that position.
	 */
	startswith: function(str, prefix, start, end) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string with the leading and trailing characters removed. The chars argument is a string specifying the set of characters to be removed. If omitted or None, the chars argument defaults to removing whitespace. The chars argument is not a prefix or suffix; rather, all combinations of its values are stripped:
	 */
	strip: function(str, chars) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string with uppercase characters converted to lowercase and vice versa.
	 */
	swapcase: function(str) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a titlecased version of the string: words start with uppercase characters, all remaining cased characters are lowercase.
	 */
	title: function(str) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string where all characters occurring in the optional argument deletechars are removed, and the remaining characters have been mapped through the given translation table, which must be a string of length 256.
	 */
	translate: function(str, table, deletechars) {
		// TODO: implement
		return str;
	},
	
	/**
	 * Return a copy of the string converted to uppercase.
	 */
	upper: function(str) {
		return str.toUpperCase();
	},
	
	/**
	 * Return the numeric string left filled with zeros in a string of length width. The original string is returned if width is less than len(s).
	 */
	zfill: function(str, width) {
		// TODO: implement
		return str;
	}
};