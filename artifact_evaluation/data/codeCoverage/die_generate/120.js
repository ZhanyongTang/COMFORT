test_mix("\\ca", all_flags, Atom("\u0001"));
test_mix("\\cz", all_flags, Atom("\u001a"));
test_mix("\\cA", all_flags, Atom("set"));
test_mix("\\cZ", all_flags, Atom("\u001a"));
