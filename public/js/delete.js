const favId = document.querySelector('input[name="favId"]');

console.log(favId);

const deleteNft = async function (event) {
    event.preventDefault();
    //const favoritesId= document.addEventListener

    await fetch(`/api/favorites/${favId}`, {
        method: 'DELETE'
    })

    console.log("deleteNFT")

    //document.location.reload();
}

const deletion = document.querySelectorAll('.deleteBtn')//.addEventListener('click', deleteNft )
console.log (deletion)

for (const button of deletion){
    button.addEventListener('click', deleteNft)
    
}






