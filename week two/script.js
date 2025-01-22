const commands = [
  { title: 'git init', description: 'Initialize a new Git repository.' },
  {
    title: 'git clone <url>',
    description: 'Clone an existing repository from the given URL.',
  },
  { title: 'git branch <branch-name>', description: 'Create a new branch.' },
  {
    title: 'git checkout <branch-name>',
    description: 'Switch to a specific branch.',
  },
  {
    title: "git commit -m 'message'",
    description: 'Commit changes with a message.',
  },
  {
    title: 'git pull',
    description: 'Fetch and merge changes from the remote repository.',
  },
  { title: 'git push', description: 'Push changes to the remote repository.' },
  {
    title: 'git fetch',
    description: 'Fetch changes from the remote repository without merging.',
  },
  {
    title: 'git merge <branch-name>',
    description: 'Merge the specified branch into the current branch.',
  },
  { title: 'git revert <commit-id>', description: 'Revert a specific commit.' },
  { title: 'git log', description: 'Show the commit history.' },
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

  commandDiv.appendChild(commandTitle);
  commandDiv.appendChild(commandDescription);

  commandList.appendChild(commandDiv);
});
