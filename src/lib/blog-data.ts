export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "how-to-take-effective-notes",
        title: "How to Take Effective Notes – A Complete Guide for Students",
        excerpt: "Are you wondering how to take effective notes? If yes, then you are definitely in the right place. To begin...",
        content: `
      <h2>The Importance of Note-Taking</h2>
      <p>Taking effective notes is a crucial skill for academic success. It helps you organize your thoughts, retain information better, and review key concepts before exams.</p>
      <h3>Methods of Note-Taking</h3>
      <ul>
        <li><strong>The Cornell Method:</strong> Divide your paper into cues, notes, and summary sections.</li>
        <li><strong>The Mapping Method:</strong> Use diagrams to visualize connections between ideas.</li>
        <li><strong>The Outlining Method:</strong> Use bullet points and indentation to structure information hierarchy.</li>
      </ul>
      <p>Remember, the best method is the one that works for you. Experiment with different techniques to find your style.</p>
    `,
        date: "April 15, 2025",
        author: "Profiquence Team",
        category: "Study Tips",
    },
    {
        id: "2",
        slug: "study-effectively-long-hours",
        title: "How can we study effectively for long hours without losing focus",
        excerpt: "Studying for long hours, without a doubt, can be very difficult. Sometimes, even though we sit with our books, our...",
        content: `
      <h2>Staying Focused for Long Sessions</h2>
      <p>Studying for extended periods requires mental stamina and strategic breaks. Here are some tips to maintain focus:</p>
      <h3>Techniques to Try</h3>
      <ul>
        <li><strong>Pomodoro Technique:</strong> Study for 25 minutes, then take a 5-minute break.</li>
        <li><strong>Active Recall:</strong> Test yourself instead of just re-reading.</li>
        <li><strong>Stay Hydrated:</strong> Drink plenty of water to keep your brain functioning optimally.</li>
      </ul>
    `,
        date: "April 14, 2025",
        author: "Profiquence Team",
        category: "Productivity",
    },
    {
        id: "3",
        slug: "neet-vs-jee-comparison",
        title: "Is NEET Easier Than JEE? A Simple Comparison for Students",
        excerpt: "Many students in classes 10 and 11 often wonder, is NEET easier than JEE? Choosing the right career path is...",
        content: `
      <h2>NEET vs. JEE: Understanding the Differences</h2>
      <p>Comparing NEET and JEE depends largely on your aptitude for Biology versus Mathematics.</p>
      <h3>Key Differences</h3>
      <ul>
        <li><strong>Subject Focus:</strong> NEET focuses on Biology, Physics, and Chemistry, while JEE focuses on Math, Physics, and Chemistry.</li>
        <li><strong>Competition:</strong> Both exams have high competition, but the nature of questions differs.</li>
        <li><strong>Career Path:</strong> NEET is for medical aspirants, whereas JEE is for engineering.</li>
      </ul>
    `,
        date: "April 10, 2025",
        author: "Profiquence Team",
        category: "Career Guidance",
    },
    {
        id: "4",
        slug: "commerce-vs-science-after-10th",
        title: "Commerce vs Science: What to Choose After 10th?",
        excerpt: "Choosing between Commerce vs Science after 10th grade is a very big decision in every student’s life. This is because...",
        content: `
      <h2>Making the Right Choice</h2>
      <p>The decision between Commerce and Science should be based on your interests and career goals.</p>
      <h3>Science Stream</h3>
      <p>Ideal for students interested in engineering, medicine, research, and technology. It requires strong analytical and problem-solving skills.</p>
      <h3>Commerce Stream</h3>
      <p>Perfect for those interested in business, finance, economics, and accountancy. It opens doors to careers in CA, CS, MBA, and more.</p>
    `,
        date: "April 05, 2025",
        author: "Profiquence Team",
        category: "Career Guidance",
    },
    {
        id: "5",
        slug: "scope-commerce-without-maths",
        title: "Scope for Commerce Without Maths: Is It the Right Choice for You?",
        excerpt: "Scope for commerce without maths is a question many students ask after Class 10. Commerce is a popular stream because...",
        content: `
      <h2>Commerce Without Maths</h2>
      <p>Many students fear that choosing Commerce without Maths limits their options. However, there are typically plenty of lucrative career paths available.</p>
      <h3>Career Options</h3>
      <ul>
        <li>Chartered Accountancy (CA)</li>
        <li>Company Secretary (CS)</li>
        <li>Bachelor of Business Administration (BBA)</li>
        <li>Law (top law schools)</li>
        <li>Hotel Management</li>
      </ul>
    `,
        date: "April 01, 2025",
        author: "Profiquence Team",
        category: "Career Guidance",
    },
];
