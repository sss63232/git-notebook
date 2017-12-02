## 複製別人的 repo下來後，改接到自己 github上的repo

This one is used when you need to change the remote repository. Let's say you copied a repo from someone else and want to change the remote repository from the original owner's to your own GitHub account. Follow the same process as git remote add origin, except use set-url instead to change the remote repo.
```git
git remote -v
git remote add origin <url>
git remote set-url origin <url>
```
## git branch

The command `git branch` lists all branches on your local machine. If you want to create a new branch, you can use `git branch <name>`, with <name> representing the name of the branch, such as 「master」.

The `git checkout <name>` command switches to an existing branch. You can also use the `git checkout -b <name>` command to create a new branch and immediately switch to it. Most people use this instead of separate branch and checkout commands.

```git
git branch
git branch <name>
git checkout <name>
git checkout -b <name>
```
When you create a branch in your project, you're creating an environment where you can try out new ideas. Changes you make on a branch don't affect the master branch, so you're free to experiment and commit changes, safe in the knowledge that your branch won't be merged until it's ready to be reviewed by someone you're collaborating with.



## git merge

If you've made a bunch of changes to a branch, let's call it 「develop」, and you want to merge that branch back into your master branch, you use the `git merge <branch>` command.

You'll want to checkout the master branch, then run git merge develop to merge develop into the master branch.
```git
git merge <branch>
```

## git pull

If you're working with multiple people, you'll find yourself in a position where a repo was updated on GitHub, but you don't have the changes locally. If that's the case, you can use `git pull origin <branch>` to pull the most recent changes from that remote branch.
```git
git pull origin <branch>
```
## git status
If you're curious to see what files have been changed and what's being tracked, you can use `git status`. If you want to see how much each file has been changed, you can use `git diff` to see the number of lines changed in each file.
```git
git status
git diff --stat
```
## 恢復之前版本
```git
git log
```
Let's say you pushed something that broke your app. Rather than fix it and push something new, you'd rather just go back one commit and try again.

If you want to go back in time and checkout your app from a previous commit, you can do this directly by `using the hash as the branch name`. This will detach your app from the current version (because you're editing a historical record, rather than the current version).
```
git checkout c3d88eaa1aa4e4d5f
```
Then, if you make changes from that historical branch and you want to push again, you'd have to do a `force push`.
Caution: Force pushing is dangerous and should only be done if you absolutely must. It will overwrite the history of your app and you will lose whatever came after.
```git
git push -f origin master
```

## git rebase應用

Other times it's just not practical to keep everything in one commit. Perhaps you want to `save your progress before trying something potentially risky`, or perhaps you made a mistake and `want to spare yourself the embarrassment of having an error in your version history`.

For that, we have `git rebase`.
Let's say you have 4 commits in your local history (not pushed to GitHub) in which you've gone back and forth. Your commits look sloppy and indecisive. `You can use rebase to combine all of those commits into a single, concise commit.`
```git
git rebase -i HEAD~4
```
The above command will open up your computer's default editor (which is Vim unless you've set it to something else), with several options for how you can change your commits. It will look something like the code below:
```
pick 130deo9 oldest commit message
pick 4209fei second oldest commit message
pick 4390gne third oldest commit message
pick bmo0dne newest commit message
```
In order to combine these, we need to change the 「pick」 option to 「fixup」 (as the documentation below the code says) to meld the commits and discard the commit messages. Note that in vim, you need to press 「a」 or 「i」 to be able to edit the text, and to save and exit, you need to type the escape key followed by `「shift + z + z」`. Don't ask me why, it just is.
```
pick 130deo9 oldest commit message
fixup 4209fei second oldest commit message
fixup 4390gne third oldest commit message
fixup bmo0dne newest commit message
```
This will merge all of your commits into the commit with the message 「oldest commit message」.
The next step is to rename your commit message. This is entirely a matter of opinion, but so long as you follow a consistent pattern, anything you do is fine. I recommend using the commit guidelines put out by Google for Angular.js.
In order to change the commit message, use the amend flag.
git commit --amend
This will also open vim, and the text editing and saving rules are the same as above. To give an example of a good commit message, here's one following the rules from the guideline:
feat: add stripe checkout button to payments page
- add stripe checkout button
- write tests for checkout
  One advantage to keeping with the types listed in the guideline is that it makes writing change logs easier. You can also include information in the footer (again, specified in the guideline) that references issues.
  Note: you should avoid rebasing and squashing your commits if you are collaborating on a project, and have code pushed to GitHub. If you start changing version history under people's noses, you could end up making everyone's lives more difficult with bugs that are difficult to track.
  There are an almost endless number of possible commands with Git, but these commands are probably the only ones you'll need to know for your first few years of programming.
