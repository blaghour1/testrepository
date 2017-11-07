const add = document.querySelector('#add');
const commentText = document.getElementById('commentText');
const reviewBlocks = document.querySelector('.reviewblocks');

add.addEventListener('click', (event) => {
    event.preventDefault();
    addNewComment();
});

commentText.addEventListener( 'keydown', (e) => {
    if (e.keyCode===13 && e.ctrlKey ) {
        addNewComment()
        }
});


function addNewComment() {
    const text = commentText.value;
    if ( text !== '' ) {
        const newReviewText = document.createElement('DIV')
        newReviewText.className = 'reviewtext';
        newReviewText.innerText = text;

        const newCommentBox = document.createElement('DIV');
        newCommentBox.className = 'commentbox';

        const newName = document.createElement('DIV');
        newName.className = 'name';
        newName.innerText = 'Максим Благодырь';
        newCommentBox.appendChild(newName);

        const newDate = document.createElement('DIV');
        newDate.className = 'date'
        newDate.innerText = '07 ноября 2017'
        newCommentBox.appendChild(newDate);

        const newParent = document.createElement('DIV')
        newParent.className = 'parent';
        newCommentBox.appendChild(newParent);
        newParent.appendChild(newReviewText);

        const triangleIn = document.createElement('DIV');
        triangleIn.className = 'triangle-in'
        newParent.appendChild(triangleIn);

        const triangleOut = document.createElement('DIV');
        triangleOut.className = 'triangle-out'
        newParent.appendChild(triangleOut);
        reviewBlocks.appendChild(newCommentBox);

        commentText.value = '';

    }
}





        // const parentNode = document.querySelector('.parent');
        

        // const triangleOut = document.createElement('DIV');
        // triangleOut.className = 'triangle-out'
        // const triangleIn = document.createElement('DIV');
        // triangleIn.className = 'triangle-in'
        // parentNode.appendChild(newReviewText);
        // console.log(parentNode)



