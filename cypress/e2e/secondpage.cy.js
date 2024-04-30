describe('Secondpage Component', () => {
  beforeEach(() => {
  cy.intercept('GET', 'https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists', {
  statusCode: 200,
  body: { "womenScientists": [ {
      "name": "Margaret Oakley Dayhoff",
      "field": "Physics, Chemistry",
      "dateOfBirth": "March 11, 1925",
      "dateOfDeath": "February 5, 1984",
      "accomplishment": "She pioneered the field of bioinformatics and gave amino acids their single letter codes",
      "id": 1,
      "image": "https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg",
      "backgroundImage": "https://cdn.rcsb.org/pdb101/learn/resources/guide-to-understanding-pdb-data/images/3pgk-representations.jpg",
      "blurb": "Margaret Oakley Dayhoff, born in 1925, was a pioneering American biochemist and computational biologist renowned for her groundbreaking work in protein sequence analysis. She is celebrated for developing the first computer-based method for aligning protein sequences, a fundamental technique in modern bioinformatics. Dayhoff's seminal Atlas of Protein Sequence and Structure, published in 1965, laid the foundation for our understanding of protein evolution and structure-function relationships. Her visionary contributions revolutionized the field, shaping the way researchers analyze and interpret biological data, and her legacy continues to inspire scientists worldwide in the pursuit of understanding life at the molecular level. She is also the creator of she's a scientist©'s grandma!",
      "wikipediaLink": "https://en.wikipedia.org/wiki/Margaret_Oakley_Dayhoff"
    },
    {
      "name": "Marie Curie",
      "field": "Physics, Chemistry",
      "dateOfBirth": "November 7, 1867",
      "dateOfDeath": "July 4, 1934",
      "accomplishment": "She discovered radioactivity",
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfAXO57aVAkHz63QhlrUGfwIpwI9GqdNEl-1hMBBlWgJAk1y71AvhjylR5EC7lULxzMODPhIvsYLwtirc",
      "backgroundImage": "https://images.newscientist.com/wp-content/uploads/2019/07/07114117/gettyimages-50693712.jpg",
      "blurb": "Marie Curie, a remarkable physicist and chemist born in 1867, made indelible contributions to science and human knowledge. Renowned for her pioneering research on radioactivity, Curie became the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields—Physics and Chemistry. Her groundbreaking discoveries, including the isolation of radium and polonium, laid the groundwork for countless advancements in medicine, industry, and physics. Despite facing numerous obstacles as a woman in science, Curie's unwavering dedication and relentless pursuit of knowledge cemented her as an icon of scientific excellence and a trailblazer for future generations of women in STEM. Her legacy continues to inspire scientists worldwide, serving as a testament to the transformative power of curiosity, perseverance, and intellectual courage.",
      "wikipediaLink": "https://en.wikipedia.org/wiki/Marie_Curie"
    },
    {
      "name": "Ada Lovelace",
      "field": "Computer Science",
      "dateOfBirth": "December 10, 1815",
      "dateOfDeath": "November 27, 1852",
      "accomplishment": "She was the first computer programmer",
      "id": 3,
      "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQOMHK4FSg2w_2qpcLG05gbIvkT0e8IcFefqBw7o7fKf9RsjL_BdCZOCSx4jKXPJXkJ4DetbI5kfcyXYpA",
      "backgroundImage": "https://pcsite.co.uk/wp-content/uploads/2023/12/Ada-Lovelace-contributions-to-computer-science-1024x585.jpg",
      "blurb": "Ada Lovelace, born in 1815, is celebrated as the world's first computer programmer and a visionary figure in the history of computing. Recognized for her collaboration with Charles Babbage on his Analytical Engine, Lovelace wrote the first algorithm intended for implementation on a machine, making her a pioneer in the field of computer science. Her insights into the potential of computing extended beyond mere calculation, as she envisioned computers' capabilities for creative expression and scientific exploration. Despite the constraints of her time, Lovelace's foresight and analytical prowess laid the groundwork for modern computing and inspired generations of mathematicians, scientists, and engineers. Her legacy serves as a testament to the transformative power of intellect, imagination, and innovation in shaping the world we live in today.",
      "wikipediaLink": "https://en.wikipedia.org/wiki/Ada_Lovelace"
    },
    {
      "name": "Jane Goodall",
      "field": "Primatology",
      "dateOfBirth": "April 3, 1934",
      "dateOfDeath": "n/a",
      "accomplishment": "She studied social and family interactions of wild chimpanzees",
      "id": 4,
      "image": "https://janegoodall.org/wp-content/uploads/gallery_06_jg3.jpg",
      "backgroundImage": "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2020/02/jg_ap0170_4.png",
      "blurb": "Jane Goodall, born in 1934, is a renowned primatologist, ethologist, and conservationist best known for her groundbreaking studies of chimpanzees in Tanzania's Gombe Stream National Park. Her pioneering research revolutionized our understanding of primate behavior, revealing remarkable insights into their social structures, tool use, and emotional lives. Goodall's work transcends scientific inquiry, as she has dedicated her life to conservation efforts and advocating for the protection of endangered species and their habitats. Through her tireless advocacy and grassroots initiatives, she has inspired global conservation movements and empowered communities to take action for wildlife and the environment. Goodall's enduring legacy serves as a beacon of hope for conservationists worldwide, reminding us of our responsibility to protect and preserve the natural world for future generations.",
      "wikipediaLink": "https://en.wikipedia.org/wiki/Jane_Goodall"
    }
  ]},
}).as("getScientists")
    cy.visit('https://shes-a-scientist.vercel.app/scientists'); 
  });

  it('displays a dashboard of women scientists with their names and fields', () => {
    cy.get(".scientist-container").children().should('have.length', 4)

    cy.get(".scientist-container").children().first().within(() => {
      cy.contains("a", "M. Oakley Dayhoff");
      cy.contains("p", "Physics, Chemistry");
      cy.get('img').should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg');
    });

    cy.get(".scientist-container").children().last().within(() => {
      cy.contains("a", "Jane Goodall");
      cy.contains("p", "Primatology");
      cy.get('img').should('have.attr', 'src', "https://janegoodall.org/wp-content/uploads/gallery_06_jg3.jpg");
    });
  });

  it('displays a form in which you can filter by field, search for scientist, or reset search', () => {
    cy.get('select').contains('option', 'Pharmacology').should('exist');
    cy.get('input[type="text"]').should('exist');
    cy.get('.reset-btn').should('exist');

    cy.get('select').select('physics').should('have.value', 'physics');
    cy.get(".scientist-container").children().should('have.length', 2);

    cy.get(".scientist-container").children().first().within(() => {
      cy.contains("a", "M. Oakley Dayhof");
      cy.contains("p", "Physics, Chemistry");
      cy.get('img').should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg');
    });

    cy.get(".scientist-container").children().last().within(() => {
      cy.contains("a", "Marie Curie");
      cy.contains("p", "Physics, Chemistry");
      cy.get('img').should('have.attr', 'src', "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfAXO57aVAkHz63QhlrUGfwIpwI9GqdNEl-1hMBBlWgJAk1y71AvhjylR5EC7lULxzMODPhIvsYLwtirc");
    });

    cy.get('.reset-btn').click();
    cy.get(".scientist-container").children().should('have.length', 4);

    cy.get('input[type="text"]').type('Margaret').should('have.value', 'Margaret');
    cy.get(".scientist-container").children().should('have.length', 1);
    cy.get(".scientist-container").children().first().within(() => {
      cy.contains("a", "M. Oakley Dayhof");
      cy.contains("p", "Physics, Chemistry");
      cy.get('img').should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg');
    });

    cy.get('input[type="text"]').type('hfejfjkkewjfk').should('have.value', 'Margarethfejfjkkewjfk');
    cy.get("#not-found").contains('h2', "No scientists matched that search. Please try again with a new query.");
    cy.get('.reset-btn').click();
    cy.get(".scientist-container").children().should('have.length', 4);
  });

  it('should take user to a page with more details about a specific scientist if they click on the scientist', () => {
    cy.intercept('GET', 'https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists/1', {
    statusCode: 200,
    body: {
        "name": "Margaret Oakley Dayhoff",
        "field": "Physics, Chemistry",
        "dateOfBirth": "March 11, 1925",
        "dateOfDeath": "February 5, 1984",
        "accomplishment": "She pioneered the field of bioinformatics and gave amino acids their single letter codes",
        "id": 1,
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg",
        "backgroundImage": "https://cdn.rcsb.org/pdb101/learn/resources/guide-to-understanding-pdb-data/images/3pgk-representations.jpg",
        "blurb": "Margaret Oakley Dayhoff, born in 1925, was a pioneering American biochemist and computational biologist renowned for her groundbreaking work in protein sequence analysis. She is celebrated for developing the first computer-based method for aligning protein sequences, a fundamental technique in modern bioinformatics. Dayhoff's seminal Atlas of Protein Sequence and Structure, published in 1965, laid the foundation for our understanding of protein evolution and structure-function relationships. Her visionary contributions revolutionized the field, shaping the way researchers analyze and interpret biological data, and her legacy continues to inspire scientists worldwide in the pursuit of understanding life at the molecular level. She is also the creator of she's a scientist©'s grandma!",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Margaret_Oakley_Dayhoff"
      }
    })
    cy.get(".scientist-container").children().first().click()
    cy.url().should('include', 'https://shes-a-scientist.vercel.app/scientist/1');
    cy.contains("h2", "Margaret Oakley Dayhoff");
    cy.contains("p", "Physics, Chemistry");
    cy.contains("p", "March 11, 1925 - February 5, 1984");
    cy.contains("p", "She pioneered the field of bioinformatics and gave amino acids their single letter codes");
    cy.get('#sd-prof-image').should('have.attr', 'src', 'https://upload.wikimedia.org/wikipedia/en/e/e5/Photo_of_Margaret_Oakley_Dayhoff.jpg');
    cy.get('#sd-bg-image').should('have.attr', 'src', "https://cdn.rcsb.org/pdb101/learn/resources/guide-to-understanding-pdb-data/images/3pgk-representations.jpg");
    cy.get("#sd").contains("p", "Margaret Oakley Dayhoff, born in 1925, was a pioneering American biochemist and computational biologist renowned");

    cy.get('a').contains("featured scientists").click();

    cy.intercept('GET', 'https://gentle-sierra-88471-456c461e0158.herokuapp.com/api/v1/womenscientists/4', {
    statusCode: 200,
    body: {
      "name": "Jane Goodall",
      "field": "Primatology",
      "dateOfBirth": "April 3, 1934",
      "dateOfDeath": "n/a",
      "accomplishment": "She studied social and family interactions of wild chimpanzees",
      "id": 4,
      "image": "https://janegoodall.org/wp-content/uploads/gallery_06_jg3.jpg",
      "backgroundImage": "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2020/02/jg_ap0170_4.png",
      "blurb": "Jane Goodall, born in 1934, is a renowned primatologist, ethologist, and conservationist best known for her groundbreaking studies of chimpanzees in Tanzania's Gombe Stream National Park. Her pioneering research revolutionized our understanding of primate behavior, revealing remarkable insights into their social structures, tool use, and emotional lives. Goodall's work transcends scientific inquiry, as she has dedicated her life to conservation efforts and advocating for the protection of endangered species and their habitats. Through her tireless advocacy and grassroots initiatives, she has inspired global conservation movements and empowered communities to take action for wildlife and the environment. Goodall's enduring legacy serves as a beacon of hope for conservationists worldwide, reminding us of our responsibility to protect and preserve the natural world for future generations.",
      "wikipediaLink": "https://en.wikipedia.org/wiki/Jane_Goodall"
    }
    })
    cy.get(".scientist-container").children().last().click()
    cy.url().should('include', 'https://shes-a-scientist.vercel.app/scientist/4');
    cy.contains("h2", "Jane Goodall");
    cy.contains("p", "Primatology");
    cy.contains("p", "Born April 3, 1934");
    cy.contains("p", "She studied social and family interactions of wild chimpanzees");
    cy.get('#sd-prof-image').should('have.attr', 'src', "https://janegoodall.org/wp-content/uploads/gallery_06_jg3.jpg");
    cy.get('#sd-bg-image').should('have.attr', 'src', "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2020/02/jg_ap0170_4.png");
    cy.get("#sd").contains("p", "Jane Goodall, born in 1934, is a renowned primatologist, ethologist, and conservationist best known for her groundbreaking");
  });
});