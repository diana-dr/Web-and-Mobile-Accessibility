# Web-and-Mobile-Accessibility

I edited the `login.htmk` and `login.css`.

## 4 Accessible Form

### Form Control Labelling

The original implementation of the "label" for the inputs was done by adding a paragraph with some CSS modifications. 
This can cause the screen reader to lose track of where the "label" belongs. This could potentially be problematic for users.
Furthermore, the current label color has a relatively low contrast ratio when compared to the background color. This is extremely unfriendly to users.

Wen addition, one of the inputs has a label but does not have the "for" attribute, which also causes problem associating the label to the right input when the user is using a screen reader.

**What We did**:
- We added a label for every control We have found in the `login.html` file.
- We also adjusted the color for the label to `black`. (originally, it was set by the package to a grey-ish color that has super low contrast.)
- We deleted the `placeholder` on each form control. 
  - Reason 1: Placeholders usually have a lighter color indicating that they are not the formal text and that the user needs to fill in information. However, in this particular example, for the purpose of accessibility, the placeholder texts have a similar darker text color to that of other formal texts. This could lead the user to believe that something has already been filled in on the required input fields (Ref [1]).
  - Reason 2: Simply changing the color of the placeholder texts to a lighter color won't work since it would lead to a low contrast ratio and cause accessibility issues. 
  - Reason 3: The placeholder attribute is not a nice place for the input format instruction, especially for people who have bad short-term memory (Ref [1]). 


#TODO someone fix the body color?
#TODO should the "optional" for the basic information be fixed?

### Related control grouping

**What We did**:
We can improve them using `<fieldset>` instead of `<div>` for better screen reader accessibility. 
We also added a `<legend>` tag to provide more information about the form.


### Form input validation

Originally, we only can saw errors indicating there are errors in the form when we submit an empty form using login button. But we did not what are the errors.
The messages are insufficient to notify the user about the errors.

**What We did**:
- Add messages to every required field.
- Adjust the top margin of the message, origianally it was a bit overlapped with the input.

### References
[1] [Don’t Use The Placeholder Attribute — Smashing Magazine](https://www.smashingmagazine.com/2018/06/placeholder-attribute/)

