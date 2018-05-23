var str = '<h1>Kevin Mutai</h1><h2>brief</h2><p>For the longest time I have been passionate about software development and\n web development in particular. I am currently levelling up my skills by leveraging\n various open source resources and this website will serve as a benchmark of\n my progress. I am also learning about cybersecurity concurrently. For more\n information about me read the "about me" section below.</p><h3>about me</h3><p>I have a background in telecommunications engineering having completed my studies in the\n field in university. I am also currently studying electrical engineering.\n I am skilled in Python, Java, HTML, CSS and Javascript. My portfolio can be\n accessed at <a href="https://github.com/mooteye">github profile</a></p>',
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 30);
}());
