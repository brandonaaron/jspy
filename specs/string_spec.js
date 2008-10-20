Screw.Unit(function() {
	describe("jspy.string", function() {
		describe("capitalize", function() {
			it("should capitalize only the first letter", function() {
				expect( jspy.string.capitalize("test multiple words") ).to( equal, "Test multiple words" );
			});
		});
		describe("center", function() {
			it("should center the string with spaces (by default) on either side", function() {
				expect( jspy.string.center("test", 8) ).to( equal, "  test  " );
				expect( jspy.string.center("test", 7) ).to( equal, "  test " );
			});
			it("should accept an alternative character to use instead of a space", function() {
				expect( jspy.string.center("test", 8, '_') ).to( equal, "__test__" );
			});
		});
		describe("count", function() {
			it("should return the number of occurrences of substring", function() {
				expect( jspy.string.count("test test 123 test test", "test") ).to( equal, 4) ;
			});
			it("should accept an optional start point", function() {
				expect( jspy.string.count("test test 123 test test", "test", 5) ).to( equal, 3 );
			});
			it("should accept an optional start point and an optional end point", function() {
				expect( jspy.string.count("test test 123 test test", "test", 5, 9) ).to( equal, 1 );
			});
		});
		describe("endswith", function() {
			it("should check to see if the string ends with the given suffix", function() {
				expect( jspy.string.endswith("testing", "g") ).to( equal, true );
				expect( jspy.string.endswith("testing", "ing") ).to( equal, true );
				expect( jspy.string.endswith("testing", "est") ).to( equal, false );
			});
			it("should accept an optional start point", function() {
				expect( jspy.string.endswith("testing", "ng", 4) ).to( equal, true );
			});
			it("should accept an optional start point and an optional end point", function() {
				expect( jspy.string.endswith("testing", "est", 0, 4) ).to( equal, true );
			});
			it("should also accept an Array of suffixes to check against", function() {
				expect( jspy.string.endswith("testing", ["e","s","ing","t"]) ).to( equal, true );
				expect( jspy.string.endswith("testing", ["e","s","ing","t"], 0, 4) ).to( equal, true );
			});
		});
		describe("expandtabs", function() {
			it("should expand tabs into 8 spaces", function() {
				expect( jspy.string.expandtabs("	testing	") ).to( equal, "        testing        " );
			});
			it("should accept an optional number for the number of spaces to use", function() {
				expect( jspy.string.expandtabs("	testing	", 2) ).to( equal, "  testing  " );
			});
		});
		describe("find", function() {
			it("should return the lowest index where the substring is found", function() {
				expect( jspy.string.find("test", "t") ).to( equal, 0 );
				expect( jspy.string.find("test", "e") ).to( equal, 1 );
				expect( jspy.string.find("test", "st") ).to( equal, 2 );
			});
			it("should accept an optional start point", function() {
				expect( jspy.string.find("test", "t", 1) ).to( equal, 2 );
			});
			it("should accept an optional start point and an optional end point", function() {
				expect( jspy.string.find("testing", "i", 2, 5) ).to( equal, 2 );
			});
			it("should return -1 if substring is not found", function() {
				expect( jspy.string.find("test", "ing") ).to( equal, -1 );
			});
		});
		describe("index", function() {
			it("should return the lowest index where the substring is found", function() {
				expect( jspy.string.index("test", "t") ).to( equal, 0 );
				expect( jspy.string.index("test", "e") ).to( equal, 1 );
				expect( jspy.string.index("test", "st") ).to( equal, 2 );
			});
			it("should accept an optional start point", function() {
				expect( jspy.string.index("test", "t", 1) ).to( equal, 2 );
			});
			it("should accept an optional start point and an optional end point", function() {
				expect( jspy.string.index("testing", "i", 2, 5) ).to( equal, 2 );
			});
			it("should throw an error 'ValueError: substring not found' if substring is not found", function() {
				var message = null;
				try { jspy.string.index("test", "ing"); } catch(e) { message = e }
				expect( message ).to( equal, 'ValueError: substring not found');
			});
		});
		describe("isalnum", function() {
			it("should return true when a string is all alphanumeric characters", function() {
				expect( jspy.string.isalnum("testing123_") ).to( equal, true );
			});
			it("should return false when a string is not all alphanumeric characters or has no characters", function() {
				expect( jspy.string.isalnum("testing 123 _") ).to( equal, false );
			});
		});
		describe("isalpha", function() {
			it("should return true when a string is all alpha characters", function() {
				expect( jspy.string.isalpha("testing") ).to( equal, true );
			});
			it("should return false when a string is not all alpha characters or has no characters", function() {
				expect( jspy.string.isalpha("testing123") ).to( equal, false );
			});
		});
		describe("isdigit", function() {
			it("should return true when a string is all digit characters", function() {
				expect( jspy.string.isdigit("123") ).to( equal, true );
			});
			it("should return false when a string is not all digit characters or has no characters", function() {
				expect( jspy.string.isdigit("testing123") ).to( equal, false );
			});
		});
		describe("islower", function() {
			it("should return true when all cased characters are lowercase and there is at least one case character", function() {
				expect( jspy.string.islower("testing") ).to( equal, true);
				expect( jspy.string.islower("testing123") ).to( equal, true);
			});
			it("should return false when all cased characters are not lowercase or there are no cased characters", function() {
				expect( jspy.string.islower("Testing") ).to( equal, false );
				expect( jspy.string.islower("") ).to( equal, false );
				expect( jspy.string.islower("123") ).to( equal, false );
			});
		});
	});
});