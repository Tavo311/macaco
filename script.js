function showRuleContent(ruleNumber) {
    var ruleContent = document.getElementById('rule' + ruleNumber + 'Content');
    var ruleImage = document.getElementById('rule' + ruleNumber + 'Image');
    ruleContent.style.display = 'block';
    ruleImage.style.display = 'block';
}

function hideRuleContent(ruleNumber) {
    var ruleContent = document.getElementById('rule' + ruleNumber + 'Content');
    var ruleImage = document.getElementById('rule' + ruleNumber + 'Image');
    ruleContent.style.display = 'none';
    ruleImage.style.display = 'none';
}
