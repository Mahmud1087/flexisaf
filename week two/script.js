const commands = [
  {
    title: 'Initialize a repository',
    description: 'Initialize a new Git repository.',
    code: 'git init',
    example: 'Example: git init',
  },
  {
    title: 'Clone a repository',
    description: 'Clone an existing repository from the given URL.',
    code: 'git clone <url>',
    example: 'Example: git clone https://github.com/user/repository.git',
  },
  {
    title: 'Create a new branch',
    description: 'Create a new branch in your repository.',
    code: 'git branch <branch-name>',
    example: 'Example: git branch feature/new-feature',
  },
  {
    title: 'Switch branches',
    description: 'Switch to a specific branch.',
    code: 'git checkout <branch-name>',
    example: 'Example: git checkout main',
  },
  {
    title: 'Create and switch branches',
    description: 'Create and switch to a new branch.',
    code: 'git checkout -b <branch-name>',
    example: 'Example: git checkout -b feature/new-feature',
  },
  {
    title: 'Commit changes',
    description: 'Commit changes with a descriptive message.',
    code: "git commit -m 'Your message here'",
    example: "Example: git commit -m 'Fix login button issue'",
  },
  {
    title: 'Pull changes',
    description: 'Fetch and merge changes from the remote repository.',
    code: 'git pull',
    example: 'Example: git pull origin main',
  },
  {
    title: 'Push changes',
    description: 'Push changes to the remote repository.',
    code: 'git push',
    example: 'Example: git push origin main',
  },
  {
    title: 'Fetch updates',
    description: 'Fetch changes from the remote repository without merging.',
    code: 'git fetch',
    example: 'Example: git fetch origin',
  },
  {
    title: 'Merge branches',
    description: 'Merge the specified branch into the current branch.',
    code: 'git merge <branch-name>',
    example: 'Example: git merge feature/new-feature',
  },
  {
    title: 'Revert a commit',
    description: 'Revert a specific commit.',
    code: 'git revert <commit-id>',
    example: 'Example: git revert abc1234',
  },
  {
    title: 'View commit history',
    description: 'Show the commit history.',
    code: 'git log',
    example: 'Example: git log --oneline',
  },
];

const commandList = document.getElementById('command-list');

commands.forEach((command) => {
  const commandDiv = document.createElement('div');
  commandDiv.classList.add('command');

  const commandTitle = document.createElement('p');
  commandTitle.classList.add('command-title');
  commandTitle.textContent = command.title;

  const commandDescription = document.createElement('p');
  commandDescription.classList.add('command-description');
  commandDescription.textContent = command.description;

  const commandCode = document.createElement('pre');
  commandCode.classList.add('command-code');
  commandCode.textContent = `Code: ${command.code}`;

  const commandExample = document.createElement('pre');
  commandExample.classList.add('command-example');
  commandExample.textContent = `${command.example}`;

  commandDiv.appendChild(commandTitle);
  commandDiv.appendChild(commandDescription);
  commandDiv.appendChild(commandCode);
  commandDiv.appendChild(commandExample);

  commandList.appendChild(commandDiv);
});
