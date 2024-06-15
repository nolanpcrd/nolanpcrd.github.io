document.addEventListener("DOMContentLoaded", function() {
    const ascii = [
        "             _                                _ ",
        " _ __   ___ | | __ _ _ __  _ __   ___ _ __ __| |",
        "| '_ \\ / _ \\| |/ _` | '_ \\| '_ \\ / __| '__/ _` |",
        "| | | | (_) | | (_| | | | | |_) | (__| | | (_| |",
        "|_| |_|\\___/|_|\\__,_|_| |_| .__/ \\___|_|  \\__,_|",
        "                          |_|                   "
    ];

    let asciiDocument = document.createElement('pre');
    document.body.appendChild(asciiDocument);

    let delay = 0;

    ascii.forEach((line, lineIndex) => {
        line.split('').forEach((char, charIndex) => {
            setTimeout(() => {
                asciiDocument.innerHTML += char;
                if (charIndex === line.length - 1) {
                    asciiDocument.innerHTML += '\n';
                }
            }, delay);
            delay += 10;
        });
    });

    delay = 2000;
    let commands = document.createElement('div');
    commands.id = 'commands';
    document.body.appendChild(commands);

    setTimeout(() => {
        let line = '> Type "help" for a list of commands.';
        line.split('').forEach((char, index) => {
            setTimeout(() => {
                commands.innerHTML += char;
                if (index === line.length - 1) {
                    commands.innerHTML += '<p></p>';
                    commands.innerHTML += '<input type="text" id="command"/>';
                    document.getElementById('command').focus();
                }
            }, delay);
            delay += 10;
        });
    }, delay);
});

let projects = false;
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let command = document.getElementById('command').value;
        let commands = document.getElementById('commands');
        let response = '';

        switch (command) {
            case 'help':
                response = 'Available commands: <br> - help <br> - clear <br> - about me <br> - github <br> - projects';
                break;
            case 'clear':
                commands.innerHTML = '> Type "help" for a list of commands.<p></p><input type="text" id="command"/>';
                document.getElementById('command').focus();
                break;
            case 'about me':
                response = 'I am Nolan Picard, student at the IUT of Dijon.';
                break;
            case 'github':
                window.open('https://github.com/nolanpcrd', '_blank');
                response = 'Opening GitHub...<p></p>> Type "help" for a list of commands.';
                break;
            case 'projects':
                response = 'Projects: <br> 1 - bloCks_ <br> 2 - chat <br> 3 - JScraft <br> 4 - rizzer <br> 5 - shoes <br> choose a project by typing its number.';
                projects = true;
                break;
            case '1':
                if (projects) {
                    window.open('https://nolanpcrd.github.io/bloCks_', '_blank');
                    response = 'Opening project "bloCks_"...<p></p>> Type "help" for a list of commands.';
                    projects = false;
                }
                else {
                    response = 'Command not found. Type "help" for a list of commands.';
                }
                break;
            case '2':
                if (projects) {
                    window.open('https://nolanpcrd.github.io/chatbot-without-ai', '_blank');
                    response = 'Opening project "chat"...<p></p>> Type "help" for a list of commands.';
                    projects = false;
                }
                else {
                    response = 'Command not found. Type "help" for a list of commands.';
                }
                break;
            case '3':
                if (projects) {
                    window.open('https://nolanpcrd.github.io/JScraft', '_blank');
                    response = 'Opening project "JScraft"...<p></p>> Type "help" for a list of commands.';
                    projects = false;
                }
                else {
                    response = 'Command not found. Type "help" for a list of commands.';
                }
                break;
            case '4':
                if (projects) {
                    window.open('https://nolanpcrd.github.io/rizzer', '_blank');
                    response = 'Opening project "rizzer"...<p></p>> Type "help" for a list of commands.';
                    projects = false;
                }
                else {
                    response = 'Command not found. Type "help" for a list of commands.';
                }
                break;
            case '5':
                if (projects) {
                    window.open('https://nolanpcrd.github.io/shoes', '_blank');
                    response = 'Opening project "shoes"...<p></p>> Type "help" for a list of commands.';
                    document.getElementById('command').focus();
                    projects = false;
                }
                else {
                    response = 'Command not found. Type "help" for a list of commands.';
                }
                break;
            default:
                response = 'Command not found. Type "help" for a list of commands.';
        }

        if (response) {
            commands.removeChild(document.getElementById('command'));
            commands.innerHTML += '> ' + command + '<br>';
            commands.innerHTML += response + '<p></p>';
            commands.innerHTML += '<input type="text" id="command"/>';
            document.getElementById('command').focus();
        }
    }
});
