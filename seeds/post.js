const { Post } = require('../models');

const postData = [
    {
        title: "Women in Tech",
        content: "Smart, savvy, and innovative women, in particular, have made this transition—from Ellen Pao, CEO of the nonprofit Project Include (formerly COO of Reddit), to Ann Mei Chang, CEO of the nonprofit Candid (formerly Senior Engineering Director at Google), and Nabiha Syed, CEO of media nonprofit The Markup (formerly VP and Associate General Counsel at Buzzfeed).",
        user_id: 1
    },
    {
        title: "Cisco Puts Identity at the Heart of Its Security Strategy & Uses AI to Simplify Operations",
        content: "At its core, identity intelligence revolves around the understanding and management of identity information within an organization. This includes not only the who and what of access, but also the when, where, and how of interactions between systems and data. By leveraging identity intelligence, organizations gain a clear picture of potential vulnerabilities and threats based on identity behaviors and access patterns.",
        user_id: 2
    },
    {
        title: "Inventing Tech To See & Treat Cancer",
        content: "Dr. Sam Mazin is a computer engineer and the inventor of game-changing technology which fights cancer. RefleXion Medical, his company, has developed a revolutionary machine which can see and treat cancer. Previously, this was done using different technologies. Sam shares his journey, from a kid who was crazy about math and science to pursuing computer engineering at a university which offers a special program which alternates between 4-month study and work placements.",
        user_id: 2
    },
    {
        title: "IBM’s patent dominance in AI innovation",
        content: "Despite OpenAI being an AI pioneer, it did not even make the top 25 of the list, with only one patent application registered by IFI CLAIMS. The very modest number of patent applications by OpenAI may reflect a strategic choice to focus on protecting its intellectual property through means other than patents, such as trade secrets or copyrights, which can offer protection without requiring disclosure. This approach would allow OpenAI to maintain a level of secrecy around certain innovations while still contributing to the broader AI community through open-source projects and collaborations.?",
        user_id: 5
    },
    {
        title: "WhatsApp Chats Will Soon Work With Other Encrypted Messaging Apps",
        content: "For about the past two years, WhatsApp has been building a way for other messaging apps to plug themselves into its service and let people chat across apps—all without breaking the end-to-end encryption it uses to protect the privacy and security of people’s messages. The move is the first time the chat app has opened itself up this way, and it potentially offers greater competition.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;