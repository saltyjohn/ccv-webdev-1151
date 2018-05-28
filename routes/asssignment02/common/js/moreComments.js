userComments = {
  user_2342: {
    name: "dio",
    time: "2014-03-28",
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo perferendis ad tenetur magni corrupti officia vel, quisquam unde laboriosam.
    `
  },
  user_12342: {
    name: "sedric22",
    time: "2014-06-13",
    comment: `Quasi quae unde corporis, aperiam excepturi eligendi nostrum! Voluptatem, iure distinctio! Sed est beatae, laudantium ab iusto voluptatem magnam itaque vero sunt? Exercitationem, unde.
    `
  },
  user_23342: {
    name: "captain_achairica_1233",
    time: "2014-06-20",
    comment: `Corrupti dicta, quo unde quia, eos consequatur voluptatem quaerat expedita id ipsam cum reprehenderit! Corrupti, eius doloremque?`
  },
  user_23542: {
    name: "steve",
    time: "2014-07-12",
    comment: `Laudantium architecto similique voluptatibus molestias, vitae optio, sequi delectus distinctio exercitationem, fuga porro. Excepturi harum ipsum magnam itaque aliquam, fuga, voluptate perferendis facilis autem aliquid totam vitae, quas nesciunt quidem?`
  }
}

function loadMoreComments() {
  commentSection = document.getElementById('comment-section');

  for (listed in userComments) {
    const aside = document.createElement('aside');
    const timeEl = document.createElement('time');
    const footer = document.createElement('footer');
    const comment = document.createElement('p');

    const user = userComments[listed];

    // handle time element creation
    const timeArray = user.time.split('-');
    const monthObj = {
      "03": "March",
      "06": "June",
      "07": "July",
    }
    timeEl.dateTime = user.time;
    timeEl.innerHTML = `${monthObj[timeArray[1]]} ${timeArray[2]}, ${timeArray[0]}`

    // handle footer element creation
    footer.innerHTML = `${user.name} wrote on `
    footer.appendChild(timeEl)
    footer.innerHTML += ':'

    // handle comment element, <p> tag:
    comment.innerText = `${user.comment}`

    // finalize aside
    aside.appendChild(footer)
    aside.appendChild(comment)
    aside.classList.add("comment-container")

    // add comment to comment section
    commentSection.appendChild(aside)
  }

  // remove element from comment-section, was causing conflicts with createElement() and new comment styling
  document.getElementById('comments-button').outerHTML = ""
}



/*
Lorem Bank:

Corrupti dicta, quo unde quia, eos consequatur voluptatem quaerat expedita id ipsam cum reprehenderit! Corrupti, eius doloremque?
Laudantium architecto similique voluptatibus molestias, vitae optio, sequi delectus distinctio exercitationem, fuga porro.
Excepturi harum ipsum magnam itaque aliquam, fuga, voluptate perferendis facilis autem aliquid totam vitae, quas nesciunt quidem?
Fugit neque aliquid quibusdam tenetur excepturi iste eius, dolore similique aut, quas porro vero facilis rem tempore aspernatur pariatur explicabo quidem perferendis.
Dolore inventore nihil quibusdam non, debitis officia! Neque.
Nihil temporibus unde blanditiis officiis repellat quo, obcaecati, impedit eius rem excepturi fugiat.
Incidunt, consequatur pariatur officia, ducimus voluptatem tempore inventore tenetur unde totam reiciendis ipsum quidem placeat, nam nisi.
Magni delectus, quae numquam quibusdam voluptates explicabo quas voluptatum nostrum esse quaerat molestiae hic! Quod odit ipsam, dolor animi fugiat eveniet consequatur praesentium qui possimus, soluta hic perferendis labore perspiciatis?
Dolore, porro culpa.
Deserunt, debitis! At, dicta corrupti recusandae sapiente possimus libero animi facilis illo blanditiis laboriosam, soluta commodi in ut deserunt nulla accusantium.
Sapiente delectus saepe consectetur incidunt et.
Tempore earum debitis, exercitationem sit molestiae autem libero nostrum aut deserunt blanditiis.
Adipisci ratione quaerat sit, sapiente, excepturi suscipit nesciunt exercitationem eum iure ut, incidunt explicabo.
Nam, perspiciatis temporibus? Possimus.
Tempore vero odio iste quod nisi voluptatibus nam impedit totam officiis rem cumque, libero debitis, iusto, ad corporis tenetur amet alias consequatur sed earum? Molestias temporibus quae accusamus adipisci doloremque.
Fuga dolore harum eum quis suscipit aliquam exercitationem, distinctio vero dignissimos hic repudiandae, animi maxime molestias iste in pariatur.
Deserunt eum sint dolore veritatis velit fuga, quisquam quaerat repudiandae nemo!
Blanditiis, sed deserunt modi quam commodi unde dolorem sequi exercitationem perspiciatis quas, pariatur obcaecati eius vero at id.
Voluptate nesciunt labore natus accusamus molestias possimus.
Ab expedita voluptas mollitia inventore?
Temporibus a accusantium laudantium reprehenderit repellat delectus veritatis tempora, maiores rerum nobis veniam eos, sapiente quia consequatur hic labore perspiciatis voluptas corporis amet mollitia cupiditate libero nihil? Reprehenderit, molestiae esse!
Rem labore sint repellendus fuga et non cumque corporis enim consectetur quae nemo inventore maiores mollitia itaque, veniam odio minus illum error.
Libero dolorum fugit expedita officiis laboriosam, quos iusto.
Fugit expedita, laudantium doloremque, dolor in voluptatem voluptatum facilis aliquam, a magnam sapiente dolore et natus veniam.
Veritatis similique quisquam fugiat fuga temporibus animi quasi, adipisci dolorum, aliquid sed dignissimos.
Vitae nesciunt facilis facere voluptate, eos optio repellendus nisi ad, recusandae quos vero qui alias quis necessitatibus dolorem nam cum dolorum repudiandae? Earum libero, distinctio doloremque iure laboriosam quod ducimus.
Numquam, minus corrupti accusantium aut facere eum adipisci, a est sit illum dolores dolorem fugit, facilis nostrum? Repellendus, ab, eos exercitationem quidem repudiandae dicta sed voluptates nam est hic velit!
Voluptatem soluta praesentium, voluptates quas nihil perferendis dicta minus suscipit nulla reiciendis nemo similique alias animi illo ducimus maxime natus voluptatum? Non maiores rerum molestiae voluptates illo, praesentium labore possimus.
Ratione laboriosam similique doloribus vitae veniam, aperiam repellendus illum in exercitationem quaerat ut tempore commodi accusantium soluta officia quas animi totam ullam ea quod, alias consectetur.
Totam deleniti tempora quam.
Est voluptas adipisci veniam.
Molestiae, tempora ex asperiores distinctio obcaecati sunt rem odio blanditiis quaerat, architecto saepe quas nam beatae? Quam, omnis.
Quos debitis aliquam eos asperiores a accusantium blanditiis.
Pariatur, saepe cupiditate perferendis nisi reprehenderit iste quaerat porro a tenetur.
Magni aspernatur, beatae impedit voluptatum eligendi architecto illo veritatis libero dignissimos harum, saepe quibusdam voluptate deleniti ab cumque doloremque.
Eos impedit, maiores odio doloremque saepe, aspernatur dicta molestias libero obcaecati possimus amet cupiditate quasi nesciunt vitae.
Commodi sequi cumque distinctio, tenetur a voluptatum, aspernatur tempora aliquid, nulla illum sapiente?
Quae nihil minus culpa iure rerum magni ipsam nisi! Voluptas voluptatum porro autem sed cum necessitatibus corrupti nostrum reprehenderit iure natus exercitationem inventore, delectus quis, molestiae itaque. Ab, quibusdam neque!
Non vitae dolor nulla facere, sint veritatis esse pariatur facilis! Aut voluptas cupiditate autem dignissimos nobis quis possimus veniam velit vero quidem, odit est ipsa consequatur neque sed. Officiis, est?

*/
