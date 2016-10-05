QUnit.test('ilgiausias zodis', function(assert) {
	assert.equal(findLongestWord(["Pamela", "Kristina", "Ana"]), 8, 'Is triju zodziu ilgiausias yra 8 raidziu')
});

QUnit.test('suma', function(assert) {
	assert.equal(sum(), 10, '1 + 2 + 3 + 4 = 10')
});

QUnit.test('daugyba', function(assert) {
	assert.equal(multiply(), 24, '1 * 2 * 3 * 4 = 24')
});

QUnit.test('funkcija dublikuoja', function(assert) {
	assert.equal(duplicate([1,2,3,4,5]), "1,2,3,4,5,1,2,3,4,5")
});
