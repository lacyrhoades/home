# MacPorts Installer addition on 2010-05-28_at_16:57:58: adding an appropriate PATH variable for use with MacPorts.
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
# Finished adapting your PATH environment variable for use with MacPorts.

# append up my personal path
export PATH=~/bin:$PATH

# turns on bash-completion
if [ -f `brew --prefix`/etc/bash_completion ]; then
  . `brew --prefix`/etc/bash_completion
fi

# augment the bash prompt with the git branch (if there is one)
# required bash-completion for git to be installed and turned on
export PS1='\h:\W$(__git_ps1 "(%s)")$ '

# set up the proper editor for things like SVN who need to know what to use
export EDITOR="vim"

# some common bash aliases
alias ll='ls -l'
alias la='ls -a'
alias lla='ls -la'
alias lls='ls -la'

