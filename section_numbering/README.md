# Automatic section numbering for the IPython notebook

This provides an IPython Notebook magic command for automatically numbering 
sections of a notebook "interactively".

Currently, headings of levels 1 and 2 are numbered.

Use:

    %install_ext https://raw.github.com/dpsanders/ipython_extensions/master/section_numbering/secnum.py

once to install, and then

    %load_ext secnum
    %secnum

to get automatic section numbering, which is updated when any cell changes type.


Please send me corrections, comments, and code improvements!
There are surely ways to make this more efficient, add options, etc. 

In particular, there should be an option to add names for the different section types,
and for numbering more levels. 
(This can be done either by copying and pasting, or in a more clever way by
somebody with more JavaScript experience...)


## Acknowledgements:

This is based, completely and shamelessly, on MinRK's `nbtoc` magic:
<https://github.com/minrk/ipython_extensions>

Thanks also to:
- Clayton Davis, for a great explanation of HTML, CSS and JavaScript
- Brian Granger, for a crucial hint about extracting a JQuery object from a notebook cell object
- Fernando Pérez, for an inspiring talk at SciPy 2013 (and, of course, for creating IPython)

