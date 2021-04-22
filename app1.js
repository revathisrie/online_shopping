        
        promptInput = getPromptInput();
        console.log(promptInput);
        deals(promptInput)

        function getPromptInput()
        {
        let promptInput = prompt('Do you want deals? Say "yes"/"no".');
        // Validation.
        // Re-prompt if input is not valid.
        while(promptInput != 'yes' && promptInput != 'no') {
            promptInput = prompt('Sorry INVALID INPUT. Do you want deals? Say "yes"/"no".');
        }
        return promptInput;
        }


        function deals(dealsInput)
        {
            document.write('<h2>You chose ' + dealsInput + ' to deals.</h2>');
            console.log(dealsInput)
        if (dealsInput == 'yes'){
            document.write('<h3>Hurray..!! you chose yes to deals.</h3>');
        }else if(dealsInput == 'no') {
            document.write('<h3>Oops!!! You missed on potential deals.</h3>');
        } else {
            document.write('<h3>Choose yes in the pop up for great deals..!!:)</h3>');
        } 
        }

        function addPictures(){
            numberOfDeals = prompt('How many deals you want to see.?');
            url ="https://image.freepik.com/free-vector/online-shopping-with-woman-character_1133-387.jpg"
            for(let i=0; i<numberOfDeals; i++)
            {
                document.write("<img src=" + url + " >");
            }
        }