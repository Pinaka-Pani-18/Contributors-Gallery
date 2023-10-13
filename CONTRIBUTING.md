# Contribution Rules📚:

Before you start contributing, we expect all contributors to follow these guidelines to ensure a positive and inclusive community.


- Create an issue about the code or contributions you want to make.
- Go through the issues before creating one,to avoid duplicate issues
- Once assigned,make your contributions and create your first PR
- kindly provide a simple detail about you code or contribution,so others can learn and improve on it
- Do NOT remove other content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works
- Try to keep pull requests small to minimize merge conflicts

<br>

## Getting Started 🤩🤗:

- Fork this repo (button on top)
  ![image](https://github.com/tvermaashutosh/Contributors-Gallery/assets/96707067/93ab324b-c9d2-4d76-a9c1-b1843405295a)

- Clone on your local machine
  ![image](https://github.com/tvermaashutosh/Contributors-Gallery/assets/96707067/9d886f1e-b037-4853-886d-59508f80f4fb)


```terminal
git clone https://github.com/Pinaka-Pani-18/Contributors-Gallery.git
```
- Navigate to project directory.
```terminal
cd Contributors-Gallery
```

- Create a new Branch

```markdown
git checkout -b my-new-branch
```
- Make your changes `folderName/fileName`

- Add your changes
```markdown
git add .
```
- Commit your changes.

```markdown
git commit -m "Relevant message"
```
![Screenshot (9)](https://github.com/tvermaashutosh/Contributors-Gallery/assets/96707067/39691df8-bbcb-4189-92c4-b10a3f94c302)

- Then push 
```markdown
git push origin my-new-branch
```

- Create a new pull request from your forked repository
  ![image](https://github.com/tvermaashutosh/Contributors-Gallery/assets/96707067/d98258a5-47c2-4b0e-ab40-7fd65ec2b850)


<br>

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.   

```terminal
git remote add upstream https://github.com/Pinaka-Pani-18/Contributors-Gallery
```

You can verify that the new remote has been added by typing
```terminal
git remote -v
```

To pull any new changes from your parent repo simply run
```terminal
git merge upstream/master
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.
