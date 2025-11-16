import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const MarkSchemeApp = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const introductionContent = `**AQA GCSE Business**

**How marking works in this booklet**

This booklet uses simplified versions of AQA's marking for GCSE Business. Because the booklet does not contain any long 6-, 9- or 12-mark questions, the marking focuses on short-answer responses only. The aim is to show you how marks are awarded, what examiners look for, and how to structure strong answers.

**Determining how many marks you can earn**

For each question type, marks are awarded based on what the question asks for:

• "State" or "Identify" questions simply require short, factual points.
  Each correct point earns one mark, and no explanation is needed.

• "Explain" questions require a point and a development.
  Students typically earn one mark for identifying a correct point and an additional mark for explaining how or why it is relevant. If the question asks for two explanations, the structure is repeated twice.

• 4–5 mark questions may require several developed points or steps.
  These still do not require extended essays, but they must be complete and clearly explained.

Markers look at the overall quality of the answer rather than focusing on tiny slips, as long as the core knowledge is correct.

**Indicative content**

The mark schemes include examples of acceptable answers. These are not the only possible answers—any response that is valid and relevant must be credited. Students do not need to include every point listed in the indicative content to achieve full marks. They only need to provide the specific number of points or explanations the question identifies.

**The own figure rule**

When a question involves calculations, the "own figure rule" applies. This rule ensures students are only penalised once for an error. For example, if you miscalculate a number early on but use that incorrect number correctly in later steps, you can still earn method marks. Examiners reward the correct process, not just the final numerical answer, hence why it is very important to show your workings.

**Zero marks**

If a response contains no correct knowledge and does not answer the question at all, it must receive zero marks. Even well-written sentences cannot earn marks unless they contain accurate, relevant content.`;

  const markSchemes = {
    1: {
      title: "Unit 1 - Business in the Real World",
      questions: [
        {
          id: "1.1",
          question: "State two reasons why somebody may want to start a business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct reason identified ×2.",
          answers: `• to make a profit
• to be their own boss / independence
• to turn an idea into a product or service
• personal satisfaction
• to provide a good or service for others
• to fill a gap in the market
• to pursue an interest / hobby
• to earn an income
• to have more control over working life`,
          note: "Do not credit vague answers like 'for money' unless clearly linked to profit or income."
        },
        {
          id: "1.2",
          question: "Explain the difference between a need and a want. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for identifying a need or a want and 1 mark for explaining the difference.",
          answers: `• A need is something essential for survival, e.g., food, water, shelter
• A want is something not essential, but desired for comfort or enjoyment, e.g., a smartphone, designer clothes`,
          note: "Both points must be included to gain full marks. Do not award marks if the student only defines one term without showing the difference."
        },
        {
          id: "1.3",
          question: "Explain two factors of production. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a factor of production (AO1) and 1 mark for explaining each factor (AO2) ×2.",
          answers: `• Land – natural resources used to produce goods and services, e.g., farmland, minerals
• Labour – human effort in producing goods or services, e.g., workers in a factory
• Capital – man-made resources used to produce goods or services, e.g., machinery, buildings
• Enterprise – the entrepreneur who organises the other factors and takes the risk of the business`,
          examples: `• Land (1) – this includes natural resources such as oil or water (1), which are essential for production of goods like petrol or drinks.
• Labour (1) – the workforce provides human effort (1), for example staff in a bakery who make bread for customers.
• Capital (1) – machinery or equipment used in production (1), e.g., a factory's ovens to make products efficiently.
• Enterprise (1) – the entrepreneur organises all resources and takes the risk (1), e.g., Bilal setting up his bike shop using land, labour, and capital.`,
          note: "Credit any real-world examples that clearly link the factor to production."
        },
        {
          id: "1.4",
          question: "Define opportunity cost. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The loss of one alternative when another is chosen."
        },
        {
          id: "1.5",
          question: "Explain the difference between a good and a service. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a good or service and 1 mark for explaining the difference.",
          answers: `• Good – a physical item that can be touched or owned, e.g., a bicycle, a book
• Service – an activity or task performed for someone else, e.g., hairdressing, bus ride`,
          examples: `• A good (1) is a tangible item like a bicycle (1), which you can touch and own.
• A service (1) is an activity like a bus ride (1), which cannot be touched but provides a benefit to the customer.`
        },
        {
          id: "1.6",
          question: "Explain, using an example, the tertiary sector. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the tertiary sector and 1 mark for an appropriate example with explanation.",
          answers: `• The tertiary sector provides services to consumers and other businesses
• Examples include: retail, banking, education, healthcare, transport, hospitality`,
          examples: `• The tertiary sector (1) provides services such as banking or retail (1), which help customers access financial products or buy goods.
• The tertiary sector involves services (1) like a hairdresser cutting hair (1), which provides a service directly to customers.`
        },
        {
          id: "1.7",
          question: "Explain one characteristic of an entrepreneur. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a characteristic and 1 mark for development.",
          answers: `• Risk-taking – willing to invest money and time with no guarantee of success
• Innovation – developing new ideas or improving existing products/services
• Organisation – ability to coordinate resources effectively
• Determination/resilience – persistence despite setbacks
• Leadership – ability to motivate and manage others`,
          examples: `• Risk-taking (1) means the entrepreneur invests their own money (1), even though the business might fail.
• Innovation (1) involves creating new products or services (1) that meet customer needs in different ways.`
        },
        {
          id: "1.8",
          question: "Define enterprise. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The willingness to take risks and show initiative in starting a business / Another business or company."
        },
        {
          id: "1.9",
          question: "Entrepreneurs have objectives. Tick (✔) two objectives of an entrepreneur. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct answer ×2.",
          answers: `Correct answers:
• To earn more money ✓
• To pursue an interest ✓

Incorrect answers:
• To become famous
• To never have to work again`
        },
        {
          id: "1.10",
          question: "Businesses are affected by changes in the external business environment. Explain one factor in the business environment that can influence a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a factor and 1 mark for explaining how it influences a business.",
          answers: `• Economic factors – interest rates, inflation, unemployment
• Social factors – changing consumer tastes, demographics, lifestyle changes
• Technological factors – new production methods, e-commerce, automation
• Environmental factors – sustainability concerns, climate change, waste management
• Political/legal factors – new laws, government policies, tax changes
• Competitive factors – actions of rivals, new entrants to market`,
          examples: `• Interest rates (1) affect the cost of borrowing for businesses (1), making expansion more or less expensive.
• Consumer tastes (1) may change, requiring businesses to adapt their products (1) to remain competitive.
• New technology (1) can improve efficiency (1), allowing businesses to produce goods faster or more cheaply.`
        },
        {
          id: "2.1",
          question: "Explain one difference between an LTD and a PLC. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a difference and 1 mark for development.",
          answers: `• Shares in a PLC can be sold on the stock exchange to the general public, whereas LTD shares cannot
• PLCs must publish detailed financial accounts publicly, LTDs have less stringent reporting requirements
• PLCs are generally larger and more expensive to set up than LTDs
• PLCs face greater regulatory scrutiny than LTDs`,
          examples: `• A PLC (1) can sell shares to anyone on the stock exchange (1), whereas an LTD can only sell shares privately.
• A PLC must publish financial accounts publicly (1), but an LTD has less detailed reporting requirements (1).`
        },
        {
          id: "2.2",
          question: "Explain the difference in ownership of a sole trader and a PLC. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying ownership structure and 1 mark for explaining the difference.",
          answers: `• A sole trader is owned by one individual
• A PLC is owned by shareholders who can buy and sell shares on the stock exchange`,
          examples: `• A sole trader (1) is owned by one person who makes all decisions (1), whereas a PLC is owned by many shareholders.
• A PLC (1) has ownership divided among shareholders (1), whereas a sole trader is the sole owner.`
        },
        {
          id: "2.3",
          question: "State two legal structures that a business may adopt. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct legal structure identified ×2.",
          answers: `• Sole trader
• Partnership
• Private limited company (LTD)
• Public limited company (PLC)
• Non-profit organisation / charity
• Social enterprise`
        },
        {
          id: "2.4",
          question: "Explain one possible conflict in a partnership. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a conflict and 1 mark for development.",
          answers: `• Disagreements over business decisions – partners may have different views on strategy or spending
• Unequal workload – one partner may feel they work harder than others
• Profit sharing disputes – disagreement over how profits should be divided
• Financial contributions – conflict over who invests more capital`,
          examples: `• Partners may disagree on strategy (1), such as whether to expand or remain small (1), causing tension.
• One partner may work harder (1) but receive the same share of profits (1), leading to resentment.`
        },
        {
          id: "2.5",
          question: "Explain, using an example, unlimited liability. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining unlimited liability and 1 mark for an example with explanation.",
          answers: "• Unlimited liability means the owner is personally responsible for all business debts",
          examples: `• Unlimited liability (1) means a sole trader could lose their personal assets like their house (1) if the business fails and owes money.
• A partnership has unlimited liability (1), so partners' personal savings could be used to pay business debts (1).`
        },
        {
          id: "2.6",
          question: "State two sources of finance for a new business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct source identified ×2.",
          answers: `• Personal savings / retained profit
• Family and friends
• Bank loan
• Mortgage
• Overdraft
• Government grants
• Crowdfunding
• Share capital / new share issue
• Selling unwanted assets
• Trade credit
• Hire purchase`
        },
        {
          id: "2.7",
          question: "Explain the difference in the distribution of profits of a sole trader and a PLC. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying how profits are distributed and 1 mark for explaining the difference.",
          answers: `• A sole trader keeps all the profit after tax
• A PLC distributes profits to shareholders as dividends`,
          examples: `• A sole trader (1) keeps all profit for themselves (1), whereas a PLC must share profits among shareholders as dividends.
• A PLC (1) pays dividends to shareholders (1), while a sole trader retains all profit.`
        },
        {
          id: "2.8",
          question: "Explain one advantage of being a private limited company (ltd). [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Limited liability – owners are not personally responsible for business debts beyond their investment
• Easier to raise capital – can sell shares to investors
• More credibility – perceived as more professional and stable than sole traders
• Continuity – business continues even if owners change`,
          examples: `• Limited liability (1) means shareholders only risk losing the money they invested (1), protecting personal assets.
• An LTD can raise capital by selling shares (1), making it easier to fund expansion (1).`
        },
        {
          id: "2.9",
          question: "Explain one disadvantage of being a sole trader. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Unlimited liability – personally responsible for all business debts
• Limited capital – difficult to raise large amounts of money
• Long working hours – responsible for all aspects of the business
• Lack of continuity – business may end if owner dies or retires
• Limited skills – may lack expertise in all areas`,
          examples: `• Unlimited liability (1) means the sole trader risks losing personal assets (1) if the business fails.
• A sole trader may struggle to raise capital (1) as banks see them as higher risk (1).`
        },
        {
          id: "2.10",
          question: "Select the most appropriate legal structure for a billion-pound retail business. Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Public limited company ✓

Incorrect answers:
• Non-profit organisation
• Partnership
• Sole trader`,
          note: "A billion-pound business requires access to large amounts of capital, which a PLC can raise by selling shares on the stock exchange."
        },
        {
          id: "3.1",
          question: "Explain one objective a new business may have. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an objective and 1 mark for development.",
          answers: `• Survival – staying in business during the early stages
• Profit maximisation – making as much profit as possible
• Sales growth – increasing the number of customers or revenue
• Market share – capturing a larger percentage of the market
• Customer satisfaction – ensuring customers are happy with products/services
• Social objectives – benefiting the community or environment`,
          examples: `• Survival (1) is important in the first year as many new businesses fail (1), so the focus is on covering costs.
• Profit maximisation (1) ensures the business can reinvest money (1) to grow and expand.`
        },
        {
          id: "3.2",
          question: "Explain the difference between an aim and an objective. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining aims and objectives and 1 mark for explaining the difference.",
          answers: `• An aim is a long-term goal or overall purpose of the business
• An objective is a specific, measurable target that helps achieve the aim`,
          examples: `• An aim (1) is a broad goal like 'becoming market leader' (1), while an objective is specific like 'increase sales by 10% this year'.
• Objectives (1) are SMART targets that help achieve the broader aim (1) of the business.`
        },
        {
          id: "3.3",
          question: "Explain one reason why businesses set objectives. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a reason and 1 mark for development.",
          answers: `• To provide direction and focus for the business
• To motivate employees by giving them clear targets
• To measure success and track progress
• To help with decision-making and planning
• To coordinate different parts of the business`,
          examples: `• Setting objectives (1) helps measure whether the business is successful (1) by comparing actual results to targets.
• Objectives motivate employees (1) by giving them clear goals to work towards (1).`
        },
        {
          id: "3.4",
          question: "Explain one objective of the local community. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an objective and 1 mark for development.",
          answers: `• Job creation – wanting businesses to provide employment opportunities
• Environmental protection – reducing pollution and waste
• Community facilities – supporting local services and amenities
• Economic growth – increasing prosperity in the area
• Social responsibility – businesses supporting local causes`,
          examples: `• Job creation (1) helps reduce unemployment in the area (1), benefiting the local economy.
• Environmental protection (1) ensures the business doesn't pollute the area (1), maintaining quality of life.`
        },
        {
          id: "3.5",
          question: "Explain one advantage of customer satisfaction. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Repeat purchases – satisfied customers are more likely to buy again
• Positive word-of-mouth – customers recommend the business to others
• Brand loyalty – customers remain loyal to the brand
• Competitive advantage – differentiates the business from competitors
• Reduced marketing costs – loyal customers don't need constant advertising`,
          examples: `• Customer satisfaction (1) leads to repeat purchases (1), increasing revenue without needing to find new customers.
• Satisfied customers (1) recommend the business to others (1), providing free marketing through word-of-mouth.`
        },
        {
          id: "3.6",
          question: "Explain two reasons objectives differ between businesses. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a reason (AO1) and 1 mark for explaining each reason (AO2) ×2.",
          answers: `• Size – larger businesses may focus on market share, while smaller businesses focus on survival
• Sector – private sector focuses on profit, public sector on service provision
• Age – new businesses focus on survival, established businesses on growth
• Ownership – PLCs focus on shareholder returns, social enterprises on social objectives
• Market conditions – businesses in competitive markets may focus on innovation`,
          examples: `• Size (1) affects objectives because a small startup may focus on survival (1), whereas a large corporation may aim for global expansion.
• Ownership (1) influences objectives as a social enterprise prioritises social impact (1), while a PLC focuses on maximising shareholder dividends.`
        },
        {
          id: "3.7",
          question: "Explain two reasons objectives of a business may change. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a reason (AO1) and 1 mark for explaining each reason (AO2) ×2.",
          answers: `• Business growth – as the business grows, objectives shift from survival to expansion
• Market conditions – economic recession may force focus on survival rather than growth
• Competition – increased competition may require focus on innovation or cost reduction
• Technology – technological changes may require objectives around digital transformation
• Legislation – new laws may require businesses to focus on compliance
• Performance – if targets are met or missed, new objectives are needed`,
          examples: `• Business growth (1) means objectives change from survival to profit maximisation (1) as the business becomes established.
• Economic recession (1) may force a business to focus on cost cutting (1) rather than expansion to survive difficult times.
• New legislation (1) may require a business to prioritise environmental objectives (1) to comply with new regulations.`
        },
        {
          id: "3.8",
          question: "State two ways, other than profit, that a business can measure success. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct method identified ×2.",
          answers: `• Market share
• Sales growth / revenue
• Customer satisfaction / retention
• Brand recognition / reputation
• Number of employees
• Social impact
• Environmental sustainability
• Innovation / new products launched
• Employee satisfaction
• Achievement of objectives`
        },
        {
          id: "4.1",
          question: "Define stakeholder. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• An individual or group that has an interest in the activities and decisions of a business."
        },
        {
          id: "4.2",
          question: "State two stakeholders of a business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct stakeholder identified ×2.",
          answers: `• Owners / shareholders
• Employees
• Customers
• Suppliers
• Local community
• Government
• Creditors / banks
• Pressure groups`
        },
        {
          id: "4.3",
          question: "State two objectives of the local community. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct objective identified ×2.",
          answers: `• Job creation / employment opportunities
• Environmental protection / reduced pollution
• Support for local facilities and services
• Economic growth in the area
• Minimal disruption (noise, traffic)
• Corporate social responsibility / community support
• Safe working conditions`
        },
        {
          id: "4.4",
          question: "Explain one objective of shareholders. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an objective and 1 mark for development.",
          answers: `• Dividends – receiving a share of the profits
• Capital growth – increase in share value
• Influence – having a say in business decisions
• Long-term sustainability – ensuring business success over time`,
          examples: `• Shareholders want dividends (1) as a return on their investment (1) in the company.
• Shareholders want share price to increase (1) so they can sell shares for profit (1).`
        },
        {
          id: "4.5",
          question: "Explain, using examples, two conflicts between stakeholders. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a conflict (AO1) and 1 mark for explaining with example (AO2) ×2.",
          answers: `• Shareholders vs employees – shareholders want low costs (reducing wages), employees want high wages
• Business vs local community – business wants to expand (more noise/pollution), community wants minimal disruption
• Customers vs shareholders – customers want low prices, shareholders want high profits
• Shareholders vs managers – shareholders want dividends, managers want to reinvest profits
• Suppliers vs business – suppliers want high prices, business wants low costs`,
          examples: `• Shareholders want higher profits (1), which may mean cutting employee wages (1), conflicting with employees' desire for better pay.
• A business may want to expand a factory (1), but the local community opposes this due to increased noise and traffic (1).
• Customers want lower prices (1), but shareholders want higher profits (1), which may require keeping prices high.`
        },
        {
          id: "5.1",
          question: "Explain two factors that influence the location of a business. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a factor (AO1) and 1 mark for explaining each factor (AO2) ×2.",
          answers: `• Proximity to customers – being close to target market reduces delivery costs and time
• Availability of labour – access to skilled workers or large workforce
• Cost of premises – rent/property prices vary by location
• Transport links – good infrastructure for receiving supplies and distributing products
• Proximity to suppliers – reduces transport costs and delivery times
• Competition – may want to be near competitors (clustering) or avoid them
• Government incentives – grants or tax breaks in certain areas
• Quality of life – attracting skilled employees with pleasant location`,
          examples: `• Proximity to customers (1) is important for a bakery as fresh bread needs quick delivery (1) to maintain quality.
• Transport links (1) are crucial for a manufacturing business (1) to receive raw materials and distribute finished goods efficiently.
• Cost of premises (1) affects profitability, so businesses may locate in cheaper areas (1) to reduce overheads.`
        },
        {
          id: "6.1",
          question: "Explain one reason why businesses write a business plan. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a reason and 1 mark for development.",
          answers: `• To secure finance – banks/investors require a business plan before lending
• To set objectives – provides clear targets and direction
• To identify problems – helps anticipate challenges and plan solutions
• To measure progress – enables tracking of actual vs planned performance
• To clarify strategy – ensures all stakeholders understand the business approach`,
          examples: `• A business plan (1) is needed to secure a bank loan (1) as banks want to see the business is viable before lending.
• A business plan (1) helps identify potential problems in advance (1) so the business can prepare solutions.`
        },
        {
          id: "6.2",
          question: "Explain one section of a business plan. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a section and 1 mark for explaining what it contains.",
          answers: `• Executive summary – overview of the business and its goals
• Business description – what the business does, products/services offered
• Market research – analysis of target market, customers, and competitors
• Marketing strategy – how the business will promote and sell products
• Operations plan – how the business will produce goods/services
• Financial forecasts – projected costs, revenues, and cash flow
• Management structure – who runs the business and their roles`,
          examples: `• Market research section (1) analyses the target market and competition (1) to show there is demand for the product.
• Financial forecasts (1) show projected revenue and costs (1) to demonstrate the business will be profitable.`
        },
        {
          id: "6.3",
          question: "Explain one disadvantage of business planning. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Time-consuming – takes time away from running the business
• May become outdated – market conditions change, making plans obsolete
• Based on assumptions – forecasts may be inaccurate
• Can be inflexible – may restrict responses to unexpected opportunities
• Costly – may require professional help to create`,
          examples: `• Business planning is time-consuming (1), taking time away from actually starting the business (1).
• Plans can become outdated (1) if market conditions change unexpectedly (1), requiring constant revision.`
        },
        {
          id: "6.4",
          question: "Define variable costs. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Costs that change in direct proportion to the level of output / production."
        },
        {
          id: "6.5",
          question: "State the formula to calculate total costs. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct formula.",
          answers: "• Total Costs = Fixed Costs + Variable Costs"
        },
        {
          id: "6.6",
          question: "Explain, using an example, what costs are in a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for explaining costs and 1 mark for an example.",
          answers: "• Costs are the expenses a business incurs in producing goods or providing services",
          examples: `• Costs (1) include expenses like raw materials, wages, and rent (1) that a business must pay.
• A bakery has costs (1) such as flour, staff wages, and electricity (1) needed to make and sell bread.`
        },
        {
          id: "6.7",
          question: "Define revenue. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The income generated from the sale of goods or services."
        },
        {
          id: "6.8",
          question: "State the formula to calculate revenue. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct formula.",
          answers: "• Revenue = Price × Quantity Sold"
        },
        {
          id: "6.9",
          question: "Bilal owns a business that sells fresh cranberry juice. The table shows information about some figures from last month. Rent, insurance and loan repayments: £600. Total variable costs: £429.50. The selling price of one bottle of juice is £2.79. Bilal sold 1200 bottles of juice last month. Calculate the profit that Bilal made last month. [4 marks]",
          marks: "AO1 – 1 mark, AO2 – 3 marks",
          scheme: "1 mark for showing the revenue formula/calculation (AO1). 1 mark for calculating revenue correctly (AO2). 1 mark for calculating total costs correctly (AO2). 1 mark for calculating profit correctly (AO2).",
          answers: `Step 1: Calculate revenue
Revenue = Price × Quantity = £2.79 × 1200 = £3,348 (1 mark)

Step 2: Calculate total costs
Total Costs = Fixed Costs + Variable Costs = £600 + £429.50 = £1,029.50 (1 mark)

Step 3: Calculate profit
Profit = Revenue - Total Costs = £3,348 - £1,029.50 = £2,318.50 (1 mark)

Award 1 mark for showing working/formula.`,
          note: "Own figure rule applies. If revenue is calculated incorrectly but used correctly in the profit calculation, award method marks."
        },
        {
          id: "7.1",
          question: "Explain two organic methods of growth. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `• Opening new branches/locations – expanding by opening more stores or outlets
• Launching new products – developing and selling new products to existing or new customers
• Expanding into new markets – selling existing products in new geographical areas or to new customer segments
• Increasing production capacity – investing in more equipment or larger premises
• Online expansion – developing e-commerce capabilities`,
          examples: `• Opening new branches (1) allows the business to reach more customers in different locations (1), increasing sales and market presence.
• Launching new products (1) attracts new customers and increases revenue (1) without needing to buy other businesses.
• Expanding into new markets (1) such as exporting to other countries (1) increases the potential customer base.`
        },
        {
          id: "7.2",
          question: "Define e-commerce. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The buying and selling of goods and services over the internet."
        },
        {
          id: "7.3",
          question: "Explain one method of external growth. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a method and 1 mark for development.",
          answers: `• Merger – two businesses join together to form a new, larger business
• Acquisition/takeover – one business buys another business
• Joint venture – two businesses work together on a specific project
• Franchise – allowing others to use the business brand and model`,
          examples: `• A merger (1) combines two businesses into one larger organisation (1), sharing resources and reducing competition.
• An acquisition (1) involves buying another business to gain immediate access to their customers and assets (1).`
        },
        {
          id: "7.4",
          question: "Explain one disadvantage of outsourcing. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Loss of control – less control over quality and timing of work
• Communication difficulties – especially if outsourcing overseas
• Job losses – may need to make employees redundant
• Dependency – reliance on external suppliers
• Security risks – sharing sensitive information with third parties
• Quality concerns – outsourced work may not meet standards`,
          examples: `• Loss of control (1) means the business cannot directly monitor quality (1) of the outsourced work.
• Communication difficulties (1) can lead to misunderstandings and delays (1) if outsourcing to a different country.
• Job losses (1) can damage employee morale (1) and the business's reputation in the community.`
        },
        {
          id: "7.5",
          question: "Explain one advantage of growth in a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Economies of scale – lower average costs per unit as production increases
• Increased market share – greater dominance in the industry
• Improved bargaining power – better deals with suppliers
• Diversification – reduces risk by operating in multiple markets
• Access to more resources – more capital for investment`,
          examples: `• Economies of scale (1) reduce the cost per unit (1), increasing profit margins or allowing competitive pricing.
• Increased market share (1) gives the business more power over competitors (1) and stronger brand recognition.`
        },
        {
          id: "7.6",
          question: "Explain, using an example, economies of scale. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining economies of scale and 1 mark for an example with explanation.",
          answers: "• Economies of scale occur when the cost per unit of output decreases as a business increases production",
          examples: `• Economies of scale (1) mean a large manufacturer can buy raw materials in bulk at a discount (1), reducing cost per unit.
• A large supermarket chain (1) can negotiate better prices from suppliers than a small shop (1), reducing costs.`
        },
        {
          id: "7.7",
          question: "Explain, using an example, one disadvantage of growth in a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for explaining with an example.",
          answers: `• Diseconomies of scale – costs per unit increase due to inefficiencies in large organisations
• Communication problems – harder to communicate in large organisations
• Loss of control – managers cannot oversee everything
• Reduced flexibility – slower to respond to market changes
• Decreased employee motivation – workers feel less valued in large organisations`,
          examples: `• Diseconomies of scale (1) occur when a business becomes too large, leading to communication breakdowns (1) and inefficiency.
• Communication problems (1) in a large organisation can lead to mistakes (1), such as orders not being processed correctly.
• Loss of personal touch (1) – a large business may lose the close customer relationships (1) that smaller businesses enjoy.`
        },
        {
          id: "7.8",
          question: "State two factors that cause diseconomies of scale. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct factor identified ×2.",
          answers: `• Poor communication
• Low employee motivation / alienation
• Lack of coordination
• Managerial inefficiency
• Increased bureaucracy
• Difficulty monitoring performance`
        },
        {
          id: "7.9",
          question: "The total cost to produce 5000 bottles of Bilal Bru is estimated to be £6250. Calculate the average unit cost per bottle of Bilal Bru. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for showing the formula/method (AO1) and 1 mark for the correct answer (AO2).",
          answers: `Formula: Average Unit Cost = Total Cost ÷ Quantity
Calculation: £6,250 ÷ 5,000 = £1.25

Average unit cost: £1.25`
        }
      ]
    },
    2: {
      title: "Unit 2 - Influences on Business",
      questions: [
        {
          id: "1.1",
          question: "What is the buying and selling of goods and services through wireless handheld devices? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• M-commerce ✓

Incorrect answers:
• E-commerce
• I-commerce
• W-commerce`
        },
        {
          id: "1.2",
          question: "Explain one way changes in technology impacts a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an impact and 1 mark for development.",
          answers: `• Increased efficiency – automation and machinery speed up production
• Cost reduction – technology can reduce labour costs
• Improved communication – email, video conferencing enable faster communication
• E-commerce opportunities – businesses can sell online to wider markets
• Better customer service – databases and CRM systems track customer preferences
• Competition – must invest in technology to remain competitive
• Skills gaps – need to train employees in new technologies`,
          examples: `• Automation (1) increases production speed and reduces human error (1), improving efficiency.
• E-commerce (1) allows businesses to reach customers globally (1) without needing physical stores.
• Social media (1) enables businesses to interact directly with customers (1) for marketing and feedback.`
        },
        {
          id: "1.3",
          question: "Identify two advantages to a supermarket selling groceries online. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct advantage identified ×2.",
          answers: `• Reach more customers / wider market access
• Lower overhead costs (no need for physical stores)
• Convenience for customers increases sales
• Can operate 24/7
• Collect customer data for targeted marketing
• Competitive advantage
• Can serve customers in remote areas`
        },
        {
          id: "1.4",
          question: "Explain one advantage to a business for using social media. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Low-cost marketing – cheaper than traditional advertising
• Direct customer engagement – can respond to customers quickly
• Viral marketing potential – content can spread rapidly
• Brand building – increases brand awareness and loyalty
• Market research – can gather customer feedback easily
• Targeted advertising – can reach specific demographics`,
          examples: `• Low-cost marketing (1) allows small businesses to advertise without expensive TV commercials (1).
• Direct customer engagement (1) builds relationships and loyalty (1) through responding to comments and messages.
• Viral content (1) can reach millions of people for free (1) if customers share posts.`
        },
        {
          id: "1.5",
          question: "Identify two forms of digital communication. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct form identified ×2.",
          answers: `• Email
• Social media
• Instant messaging / WhatsApp
• Video conferencing / Zoom
• Websites
• Mobile apps
• Text messages / SMS
• Video calls
• Online chat / live chat`
        },
        {
          id: "2.1",
          question: "Explain one disadvantage of using environmentally friendly raw materials. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Higher costs – often more expensive than conventional materials
• Limited availability – may be harder to source in required quantities
• Quality concerns – may not perform as well as traditional materials
• Longer lead times – may take longer to obtain
• Limited supplier options – fewer suppliers available`,
          examples: `• Higher costs (1) reduce profit margins (1) as eco-friendly materials are more expensive than conventional options.
• Limited availability (1) may cause production delays (1) if materials cannot be sourced quickly.`
        },
        {
          id: "2.2",
          question: "Define sustainability. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Meeting the needs of the present without compromising the ability of future generations to meet their own needs / Operating in a way that minimizes environmental damage."
        },
        {
          id: "2.3",
          question: "State two ways businesses can have an impact on the environment. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct impact identified ×2.",
          answers: `• Pollution (air, water, land, noise)
• Waste production
• Resource depletion / using non-renewable resources
• Carbon emissions / greenhouse gases
• Deforestation
• Habitat destruction
• Traffic congestion
• Energy consumption`
        },
        {
          id: "2.4",
          question: "Identify one objective that the local community may have. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct objective.",
          answers: `• Job creation
• Environmental protection
• Reduced pollution
• Supporting local facilities
• Minimal disruption (noise/traffic)
• Economic growth
• Safe working conditions`
        },
        {
          id: "2.5",
          question: "Define ethics. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Moral principles that guide business behaviour and decision-making regarding what is right and wrong."
        },
        {
          id: "2.6",
          question: "Explain two advantages of a business behaving ethically. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying an advantage (AO1) and 1 mark for explaining each advantage (AO2) ×2.",
          answers: `• Improved reputation – customers trust ethical businesses more
• Customer loyalty – ethical practices encourage repeat purchases
• Attracts quality employees – people want to work for ethical companies
• Competitive advantage – differentiates from competitors
• Reduced risk – less chance of negative publicity or legal issues
• Long-term sustainability – ethical practices ensure business longevity`,
          examples: `• Improved reputation (1) attracts more customers who prefer to buy from ethical businesses (1).
• Customer loyalty (1) increases as consumers trust the business (1) and are more likely to return.
• Attracts quality employees (1) who are motivated by the company's values (1), improving workforce quality.
• Competitive advantage (1) as ethical businesses stand out from competitors (1) who may have poor practices.`
        },
        {
          id: "2.7",
          question: "Bilal's Chocolonely is a British chocolate making business. Figure 1 shows the cost of cocoa, per tonne, in 2019. Using Figure 1, calculate the difference in costs of purchasing one tonne of fairtrade cocoa and one tonne of normal cocoa. Give your answer as a percentage. [3 marks]",
          marks: "AO2 – 3 marks",
          scheme: "1 mark for calculating the difference in cost. 1 mark for showing the percentage calculation formula. 1 mark for the correct percentage answer.",
          answers: `Note: Without Figure 1, this is a sample calculation approach:

Step 1: Calculate difference
Difference = Fairtrade cost - Normal cost (1 mark)

Step 2: Calculate percentage
Percentage difference = (Difference ÷ Normal cost) × 100 (1 mark)

Step 3: Final answer
State the percentage (1 mark)

Example: If normal cocoa = £2000 and fairtrade = £2400:
Difference = £2400 - £2000 = £400
Percentage = (£400 ÷ £2000) × 100 = 20%`,
          note: "Award marks for correct method even if figures from Figure 1 are not available. Own figure rule applies."
        },
        {
          id: "2.8",
          question: "State and explain two types of pollution. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a type (AO1) and 1 mark for explaining each type (AO2) ×2.",
          answers: `Type 1: Air pollution
Explanation: Harmful substances released into the atmosphere from factories, vehicles, or production processes, such as carbon dioxide, smoke, or chemicals.

Type 2: Water pollution
Explanation: Contamination of water bodies (rivers, lakes, oceans) through discharge of chemicals, waste, or untreated sewage from businesses.

Type 3: Land pollution
Explanation: Contamination of soil through improper disposal of waste, chemicals, or non-biodegradable materials from industrial activities.

Type 4: Noise pollution
Explanation: Excessive noise from business operations, machinery, or traffic that disturbs the local community and affects quality of life.`,
          examples: `Air pollution – Factories releasing smoke and fumes (1) that contribute to climate change and health problems in local communities (1).
Water pollution – A factory disposing chemicals into a river (1) killing wildlife and making water unsafe for human use (1).`
        },
        {
          id: "2.9",
          question: "Explain one possible trade-off between sustainability and profit. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a trade-off and 1 mark for development.",
          answers: `• Higher costs of sustainable practices reduce profit margins
• Investment in green technology requires upfront capital
• Sustainable materials may be more expensive than conventional options
• Environmental compliance costs reduce profitability`,
          examples: `• Using renewable energy (1) costs more initially (1), reducing short-term profits despite long-term benefits.
• Eco-friendly packaging (1) is more expensive than plastic (1), increasing costs and reducing profit margins.
• Investing in carbon offsetting (1) diverts money from profit (1) to environmental projects.`
        },
        {
          id: "2.10",
          question: "Explain, using an example, the term 'global warming'. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining global warming and 1 mark for an example with explanation.",
          answers: "• Global warming is the gradual increase in Earth's average temperature caused by greenhouse gases",
          examples: `• Global warming (1) is caused by carbon emissions from factories and vehicles (1), leading to rising sea levels and extreme weather.
• Businesses contribute to global warming (1) through burning fossil fuels (1), which releases carbon dioxide into the atmosphere.`
        },
        {
          id: "2.11",
          question: "Explain, using an example, one benefit to a business of recycling. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a benefit and 1 mark for explaining with an example.",
          answers: `• Cost savings – reduces waste disposal costs
• Improved reputation – customers view the business positively
• Resource efficiency – reusing materials reduces purchase costs
• Legal compliance – meets environmental regulations
• New revenue streams – can sell recycled materials`,
          examples: `• Cost savings (1) as a business can reuse cardboard packaging (1) instead of buying new materials.
• Improved reputation (1) attracts environmentally conscious customers (1) who prefer sustainable businesses.
• A supermarket recycling cardboard (1) reduces waste collection costs (1) and saves money on disposal fees.`
        },
        {
          id: "3.1",
          question: "Explain one advantage to a business of low interest rates. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Cheaper borrowing – loans cost less to repay
• Encourages investment – easier to fund expansion or new equipment
• Increased consumer spending – customers borrow more to spend
• Lower mortgage costs – reduces property costs for the business`,
          examples: `• Cheaper borrowing (1) means a business can afford to take out loans for expansion (1) with lower interest payments.
• Increased consumer spending (1) boosts sales (1) as customers have more disposable income from cheaper loans.`
        },
        {
          id: "3.2",
          question: "An increase in interest rates would be which type of change? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Economic ✓

Incorrect answers:
• Environmental
• Legal
• Social`
        },
        {
          id: "3.3",
          question: "Explain one way low consumer spending impacts a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an impact and 1 mark for development.",
          answers: `• Reduced sales – customers buy less
• Lower revenue – less money coming into the business
• Profit decline – reduced income affects profitability
• May need to cut costs – redundancies or reduced investment
• Stock build-up – unsold inventory accumulates`,
          examples: `• Reduced sales (1) lead to lower revenue and potential losses (1) for the business.
• A business may need to make redundancies (1) to reduce costs during periods of low sales (1).
• Stock accumulates (1) requiring discounts to clear inventory (1), reducing profit margins.`
        },
        {
          id: "3.4",
          question: "Explain one way a rise in unemployment might affect a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an effect and 1 mark for development.",
          answers: `• Easier recruitment – larger pool of available workers
• Lower wage pressure – can offer lower wages due to high supply
• Reduced consumer spending – unemployed people spend less
• Skills availability – may find skilled workers more easily`,
          examples: `• Easier recruitment (1) as more people are looking for work (1), giving the business more choice.
• Reduced consumer spending (1) leads to lower sales (1) as unemployed people have less money.
• Lower wage pressure (1) allows the business to hire workers at competitive rates (1) due to high labour supply.`
        },
        {
          id: "3.5",
          question: "The average annual salary in the UK at the beginning of 2024 was £28,000 per year. It is estimated that salaries will rise by 2.5% at some point in 2024. Work out the expected average salary in the UK in February 2025. [2 marks]",
          marks: "AO2 – 2 marks",
          scheme: "1 mark for showing the calculation method and 1 mark for the correct answer.",
          answers: `Calculation:
Increase = £28,000 × 2.5% = £28,000 × 0.025 = £700
New salary = £28,000 + £700 = £28,700

Expected average salary: £28,700`,
          note: "Accept £28,700.00 or equivalent working."
        },
        {
          id: "4.1",
          question: "Explain, using an example, the term 'globalisation'. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining globalisation and 1 mark for an example with explanation.",
          answers: "• Globalisation is the increasing integration and interdependence of countries through trade, investment, and technology",
          examples: `• Globalisation (1) means a UK business can sell products worldwide online (1), reaching international customers.
• Globalisation (1) allows companies like McDonald's to operate in many countries (1), standardizing products globally.
• Businesses can source materials globally (1), such as a UK company buying parts from China (1) at lower costs.`
        },
        {
          id: "4.2",
          question: "Define exchange rates. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The price of one currency in terms of another currency."
        },
        {
          id: "4.3",
          question: "State two advantages of globalisation for a UK business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct advantage identified ×2.",
          answers: `• Access to larger markets / more customers
• Lower production costs (through outsourcing)
• Access to cheaper raw materials
• Economies of scale
• Access to skilled labour globally
• Reduced dependence on domestic market
• Increased competitiveness`
        },
        {
          id: "4.4",
          question: "Explain two methods a business may use to compete internationally. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `• Lower prices – competitive pricing to attract international customers
• Quality products – high quality to differentiate from competitors
• Strong branding – building recognizable global brand
• Innovation – developing unique products or services
• Customer service – excellent service to build loyalty
• E-commerce – selling online to reach global markets
• Local adaptation – adapting products to suit local tastes`,
          examples: `• Lower prices (1) can be achieved through economies of scale (1), attracting price-sensitive international customers.
• Strong branding (1) creates customer loyalty across countries (1), such as Apple's global recognition.
• Innovation (1) helps the business offer unique products (1) that competitors cannot match.
• Local adaptation (1) involves changing products to suit local preferences (1), like McDonald's offering different menus in different countries.`
        },
        {
          id: "4.5",
          question: "Define disposable income. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Income remaining after taxes and essential expenses have been deducted / Money available to spend on non-essential items."
        },
        {
          id: "4.6",
          question: "What is an advantage of a strong pound? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Imports are cheaper ✓

Incorrect answers:
• Builds relationships with suppliers
• Attracts investors
• It is easier to manufacture goods`
        },
        {
          id: "4.7",
          question: "Identify two disadvantages of globalisation for a UK business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct disadvantage identified ×2.",
          answers: `• Increased competition from foreign businesses
• Currency fluctuations / exchange rate risk
• Cultural differences / language barriers
• Legal/regulatory differences
• Longer supply chains
• Ethical concerns about overseas operations
• Potential for negative publicity
• Political instability in foreign markets`
        },
        {
          id: "5.1",
          question: "Explain two impacts of legislation on a business. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying an impact (AO1) and 1 mark for explaining each impact (AO2) ×2.",
          answers: `• Increased costs – compliance with regulations requires investment
• Improved standards – ensures quality and safety
• Competitive equality – all businesses must follow same rules
• Protection for stakeholders – employees and customers are protected
• Administrative burden – time spent on paperwork and compliance
• Innovation opportunities – may drive development of new processes`,
          examples: `• Increased costs (1) as businesses must invest in safety equipment and training (1) to comply with health and safety laws.
• Improved standards (1) enhance customer trust (1) as products meet legal quality requirements.
• Administrative burden (1) takes time away from core business activities (1) to complete regulatory paperwork.
• Protection for employees (1) ensures fair treatment and safe working conditions (1) through employment laws.`
        },
        {
          id: "5.2",
          question: "Explain one consequence to a business for failing to follow legislation. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a consequence and 1 mark for development.",
          answers: `• Fines/penalties – financial punishment from authorities
• Legal action – court cases and prosecution
• Damage to reputation – loss of customer trust
• Business closure – forced to shut down
• Loss of license – unable to operate legally
• Compensation claims – paying damages to affected parties`,
          examples: `• Fines (1) can be substantial, significantly reducing profits (1) and harming financial stability.
• Damage to reputation (1) leads to loss of customers (1) who no longer trust the business.
• Business closure (1) can occur in serious cases (1), ending operations completely.`
        },
        {
          id: "5.3",
          question: "Explain one benefit to a business for following legislation. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a benefit and 1 mark for development.",
          answers: `• Avoids penalties – no fines or legal action
• Enhanced reputation – seen as responsible and trustworthy
• Employee satisfaction – workers feel valued and protected
• Competitive advantage – can use compliance as selling point
• Reduced risk – fewer accidents or legal issues
• Better relationships with stakeholders – builds trust`,
          examples: `• Enhanced reputation (1) attracts customers who prefer ethical businesses (1).
• Employee satisfaction (1) improves productivity and reduces staff turnover (1).
• Avoids penalties (1) saving money that would be spent on fines (1).`
        },
        {
          id: "5.4",
          question: "State and explain two employment laws. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a law (AO1) and 1 mark for explaining each law (AO2) ×2.",
          answers: `Type 1: National Minimum Wage Act
Explanation: Sets the minimum amount employers must pay workers per hour based on age, ensuring fair pay and preventing exploitation.

Type 2: Health and Safety at Work Act
Explanation: Requires employers to provide a safe working environment, including proper equipment, training, and risk assessments to prevent accidents.

Type 3: Equality Act
Explanation: Protects employees from discrimination based on age, gender, race, disability, religion, or sexual orientation in recruitment and employment.

Type 4: Employment Rights Act
Explanation: Provides employees with rights including contracts, redundancy pay, and protection against unfair dismissal.`,
          examples: `National Minimum Wage Act – Employers must pay at least the legal minimum wage (1) to ensure workers receive fair compensation (1).
Health and Safety at Work Act – Businesses must provide safety training and equipment (1) to protect employees from workplace injuries (1).`
        },
        {
          id: "5.5",
          question: "Explain one factor covered by consumer law. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a factor and 1 mark for development.",
          answers: `• Products must be of satisfactory quality – fit for purpose and durable
• Products must match description – as advertised
• Right to refund – if product is faulty
• Products must be safe – not cause harm
• Fair trading – honest advertising and pricing`,
          examples: `• Products must be of satisfactory quality (1), meaning they work properly and last a reasonable time (1).
• Products must match description (1), so customers get what was advertised (1) without being misled.
• Right to refund (1) allows customers to return faulty goods (1) within a specified period.`
        },
        {
          id: "5.6",
          question: "Which of the following statements relate to employment law? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• A disability should not affect a person's chances of getting a job ✓

Incorrect answers:
• A person's qualifications should not affect how much they earn
• All applicants must be interviewed for a job
• All applicants must be offered the same wage rate`
        },
        {
          id: "6.1",
          question: "Explain, using an example, the term 'competition'. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining competition and 1 mark for an example with explanation.",
          answers: "• Competition occurs when businesses rival each other to attract customers in the same market",
          examples: `• Competition (1) means businesses like Tesco and Asda compete for customers (1) by offering lower prices or better service.
• Competition (1) drives businesses to improve products (1) to win customers from rivals.
• In the smartphone market (1), Apple and Samsung compete (1) by developing innovative features.`
        },
        {
          id: "6.2",
          question: "Explain one advantage for a business operating in a non-competitive market. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Can charge higher prices – no competitive pressure
• Guaranteed customers – limited alternatives available
• Lower marketing costs – less need to promote
• Easier planning – more predictable demand
• Higher profit margins – can set prices freely`,
          examples: `• Can charge higher prices (1) as customers have no alternative suppliers (1), increasing profit margins.
• Lower marketing costs (1) as the business doesn't need to compete for customers (1).
• Easier planning (1) due to stable demand without competitive threats (1).`
        },
        {
          id: "6.3",
          question: "Explain one advantage for a business operating in a competitive market. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Drives innovation – must improve to stay ahead
• Efficiency improvements – pressure to reduce costs
• Better customer service – must satisfy customers to retain them
• Quality improvements – must maintain standards
• Market growth – competition can expand overall market`,
          examples: `• Drives innovation (1) as businesses develop new products (1) to differentiate from competitors.
• Efficiency improvements (1) reduce costs (1), allowing competitive pricing while maintaining profitability.
• Better customer service (1) helps retain customers (1) who might otherwise switch to competitors.`
        },
        {
          id: "6.4",
          question: "Explain two potential risks a business may face. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a risk (AO1) and 1 mark for explaining each risk (AO2) ×2.",
          answers: `• Business failure – losing money and closing down
• Competition – rivals taking customers
• Economic downturn – reduced consumer spending
• Technology changes – products becoming obsolete
• Changing consumer tastes – demand falling
• Supply chain disruption – inability to get materials
• Reputation damage – negative publicity
• Legal action – fines or prosecution
• Theft/fraud – financial losses`,
          examples: `• Business failure (1) can occur if the business cannot generate enough revenue (1) to cover costs, leading to closure.
• Competition (1) from new entrants can reduce market share (1), threatening profitability.
• Economic downturn (1) reduces consumer spending (1), leading to lower sales and potential losses.
• Changing consumer tastes (1) can make products obsolete (1), requiring costly adaptation.`
        },
        {
          id: "6.5",
          question: "State and explain two ways a business can minimise risk. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `Type 1: Market research
Explanation: Understanding customer needs and market conditions before launching products reduces the risk of failure and ensures demand exists.

Type 2: Financial planning
Explanation: Creating cash flow forecasts and budgets helps anticipate problems and ensures the business has sufficient funds to operate.

Type 3: Insurance
Explanation: Protects against unexpected events like theft, fire, or legal claims by providing financial compensation for losses.

Type 4: Diversification
Explanation: Offering a range of products or operating in multiple markets spreads risk, so failure in one area doesn't destroy the entire business.`,
          examples: `Market research (1) identifies customer demand before investing (1), reducing the risk of launching unsuccessful products.
Insurance (1) provides financial protection against theft or damage (1), minimizing potential losses.`
        },
        {
          id: "6.6",
          question: "Which of the following is likely to be a disadvantage for a business operating in a non-competitive environment? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Risk of becoming stale in product offering ✓

Incorrect answers:
• Price elastic demand
• Requirement for constant reinvention of products
• Risk of losing customers to substitute products`
        }
      ]
    },
    3: {
      title: "Unit 3 - Business Operations",
      questions: [
        {
          id: "1.1",
          question: "Explain, using an example, flow production. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining flow production and 1 mark for an example with explanation.",
          answers: "• Flow production is continuous mass production of identical standardized products on an assembly line",
          examples: `• Flow production (1) is used in car manufacturing where vehicles move along an assembly line (1) with each worker adding components.
• Flow production (1) involves making products continuously, like a bottling plant filling thousands of bottles per hour (1).
• A chocolate factory uses flow production (1) to make identical bars constantly (1) on automated production lines.`
        },
        {
          id: "1.2",
          question: "Which method of production would be most suitable for producing aeroplanes? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Job production ✓

Incorrect answers:
• Flow production
• Lean production`,
          note: "Job production is suitable for aeroplanes as each aircraft is customized and made to order."
        },
        {
          id: "1.3",
          question: "Explain your answer to Question 1.2. [1 mark]",
          marks: "AO2 – 1 mark",
          scheme: "1 mark for a valid explanation.",
          answers: "• Aeroplanes are complex, expensive, and customized products made to specific customer requirements / Each aircraft takes a long time to build and requires skilled workers.",
          examples: `• Job production is suitable (1) because each aeroplane is customized to customer specifications.
• Aeroplanes are too complex and expensive (1) for mass production methods.`
        },
        {
          id: "1.4",
          question: "Explain, using an example, lean production. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining lean production and 1 mark for an example with explanation.",
          answers: "• Lean production aims to minimize waste while maximizing efficiency and productivity",
          examples: `• Lean production (1) involves reducing waste, such as using just-in-time stock control (1) to avoid holding excess inventory.
• A car manufacturer using lean production (1) orders parts only when needed (1), reducing storage costs and waste.
• Lean production (1) eliminates unnecessary processes (1), improving efficiency and reducing costs.`
        },
        {
          id: "1.5",
          question: "State one advantage of lean production. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct advantage.",
          answers: `• Reduced waste / lower costs
• Improved efficiency
• Higher quality
• Lower inventory costs
• Faster production
• Increased profit margins
• Better use of resources`
        },
        {
          id: "1.6",
          question: "Explain, using an example, just in time (JIT) stock control. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining JIT and 1 mark for an example with explanation.",
          answers: "• JIT stock control involves receiving materials and stock only when needed for production, minimizing inventory held",
          examples: `• JIT (1) means a business orders materials only when needed (1), reducing storage costs.
• A sandwich shop using JIT (1) orders fresh bread daily (1) to avoid waste and ensure freshness.
• Car manufacturers using JIT (1) receive parts from suppliers just before assembly (1), eliminating warehouse needs.`
        },
        {
          id: "1.7",
          question: "Explain one disadvantage of using just in time (JIT) stock control. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Vulnerable to supply disruption – production stops if materials don't arrive
• Reliance on suppliers – depends on reliable and punctual deliveries
• No buffer stock – cannot meet unexpected increases in demand
• Higher transport costs – frequent small deliveries cost more
• Quality issues – less time to check materials before use`,
          examples: `• Supply disruption (1) can halt production completely (1) if materials don't arrive on time.
• Reliance on suppliers (1) means production depends on their reliability (1), which can be risky.
• No buffer stock (1) means the business cannot meet sudden increases in demand (1).`
        },
        {
          id: "2.1",
          question: "Explain, using an example, just in case (JIC) stock control. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining JIC and 1 mark for an example with explanation.",
          answers: "• JIC stock control involves holding buffer stock to ensure materials are available in case of supply problems or unexpected demand",
          examples: `• JIC (1) means keeping extra stock in case suppliers are delayed (1), ensuring production continues.
• A supermarket holds extra stock (1) to meet unexpected demand during busy periods (1).
• JIC (1) involves maintaining safety stock (1) to prevent running out during supply chain disruptions.`
        },
        {
          id: "2.2",
          question: "Explain one advantage of using just in case (JIC) stock control. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Protection against supply disruption – can continue production if deliveries fail
• Meet unexpected demand – can respond to sudden increases in orders
• Bulk buying discounts – can negotiate better prices for large orders
• Reduced risk of stockouts – ensures customer orders are fulfilled
• Flexibility – can cope with supplier reliability issues`,
          examples: `• Protection against disruption (1) allows production to continue (1) even if suppliers are delayed.
• Meet unexpected demand (1) without losing sales (1) during busy periods.
• Bulk buying (1) reduces costs per unit (1) through volume discounts.`
        },
        {
          id: "2.3",
          question: "Explain, using an example, economies of scale. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining economies of scale and 1 mark for an example with explanation.",
          answers: "• Economies of scale occur when the cost per unit decreases as production increases",
          examples: `• Economies of scale (1) mean large manufacturers buy materials in bulk at discounted prices (1), reducing unit costs.
• A large supermarket chain (1) negotiates lower prices from suppliers (1) due to ordering large quantities.
• Bulk purchasing (1) reduces the average cost per unit (1) as fixed costs are spread over more units.`
        },
        {
          id: "2.4",
          question: "Define buffer stock. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The minimum stock level held to prevent running out / Emergency reserve stock held in case of supply problems or unexpected demand."
        },
        {
          id: "2.5",
          question: "Explain two factors that affect the choice of supplier. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a factor (AO1) and 1 mark for explaining each factor (AO2) ×2.",
          answers: `• Price – cost of materials affects profitability
• Quality – ensures products meet standards
• Reliability – consistent and timely deliveries
• Location – proximity reduces transport costs and delivery times
• Capacity – ability to supply required quantities
• Payment terms – credit facilities affect cash flow
• Ethics – supplier's environmental and social practices
• Flexibility – ability to adjust orders`,
          examples: `• Price (1) is important as lower costs from suppliers increase profit margins (1).
• Quality (1) ensures the business produces good products (1), maintaining customer satisfaction.
• Reliability (1) is crucial as late deliveries disrupt production (1) and disappoint customers.
• Location (1) affects transport costs and delivery speed (1), with closer suppliers being more efficient.`
        },
        {
          id: "2.6",
          question: "Explain, using an example, procurement. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining procurement and 1 mark for an example with explanation.",
          answers: "• Procurement is the process of sourcing and purchasing materials, goods, or services from suppliers",
          examples: `• Procurement (1) involves a business finding and buying raw materials like steel (1) from suppliers.
• Procurement (1) includes negotiating contracts with suppliers (1) to ensure reliable delivery of materials.
• A restaurant's procurement (1) involves ordering food ingredients from wholesalers (1) for meal preparation.`
        },
        {
          id: "2.7",
          question: "Explain two benefits of an effective supply chain management. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a benefit (AO1) and 1 mark for explaining each benefit (AO2) ×2.",
          answers: `• Cost reduction – efficient processes lower operating costs
• Improved reliability – consistent delivery of materials
• Better quality – control over supplier standards
• Faster delivery – streamlined processes speed up production
• Reduced waste – minimizes excess stock and obsolescence
• Competitive advantage – enables faster response to customer needs
• Risk management – identifies and mitigates supply disruptions`,
          examples: `• Cost reduction (1) through negotiating better prices and reducing waste (1), improving profitability.
• Improved reliability (1) ensures materials arrive on time (1), preventing production delays.
• Faster delivery (1) allows the business to respond quickly to customer orders (1), improving satisfaction.
• Better quality control (1) ensures materials meet standards (1), reducing defective products.`
        },
        {
          id: "3.1",
          question: "Identify two consequences of quality issues. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct consequence identified ×2.",
          answers: `• Loss of customers / reduced sales
• Damage to reputation / brand image
• Increased costs (returns, refunds, replacements)
• Legal action / compensation claims
• Wasted materials and time
• Demotivated employees
• Loss of competitive advantage
• Product recalls`
        },
        {
          id: "3.2",
          question: "Explain, using an example, total quality management (TQM). [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining TQM and 1 mark for an example with explanation.",
          answers: "• TQM is a management approach where all employees are responsible for maintaining quality standards throughout the organization",
          examples: `• TQM (1) involves every employee checking quality at each stage (1), such as workers inspecting products during production.
• TQM (1) means a business culture focused on continuous improvement (1), with all staff contributing to quality.
• In a hotel using TQM (1), every employee from cleaners to managers ensures high standards (1) in their work.`
        },
        {
          id: "3.3",
          question: "Explain two benefits of maintaining quality. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a benefit (AO1) and 1 mark for explaining each benefit (AO2) ×2.",
          answers: `• Enhanced reputation – customers trust the brand
• Customer loyalty – repeat purchases and recommendations
• Reduced waste – fewer defective products
• Higher prices – quality products command premium prices
• Competitive advantage – differentiation from rivals
• Reduced costs – fewer returns and complaints
• Employee pride – motivation from producing quality work`,
          examples: `• Enhanced reputation (1) attracts more customers (1) who value quality products.
• Customer loyalty (1) leads to repeat purchases and positive word-of-mouth (1), increasing sales.
• Reduced waste (1) lowers costs (1) by minimizing defective products that need replacing.
• Competitive advantage (1) differentiates the business from rivals (1) in crowded markets.`
        },
        {
          id: "3.4",
          question: "Explain two costs of maintaining quality. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a cost (AO1) and 1 mark for explaining each cost (AO2) ×2.",
          answers: `• Training costs – staff need quality management training
• Inspection costs – time and resources for checking products
• Equipment investment – quality testing machinery
• Better materials – higher quality inputs cost more
• Slower production – thorough checks take time
• Quality systems – implementing and maintaining procedures
• Certification costs – obtaining quality standards like ISO`,
          examples: `• Training costs (1) are needed to educate employees on quality procedures (1), requiring investment.
• Inspection costs (1) involve paying staff to check products (1), adding to operational expenses.
• Better materials (1) cost more than standard alternatives (1), increasing production costs.
• Equipment investment (1) in testing machinery (1) requires significant capital expenditure.`
        },
        {
          id: "4.1",
          question: "State two methods of good service. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct method identified ×2.",
          answers: `• Responding quickly to customer queries
• Polite and friendly staff
• After-sales support
• Easy returns/refunds process
• Personalized service
• Product knowledge
• Listening to customer needs
• Keeping customers informed
• Going the extra mile
• Handling complaints effectively`
        },
        {
          id: "4.2",
          question: "Explain two benefits of providing good customer service. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a benefit (AO1) and 1 mark for explaining each benefit (AO2) ×2.",
          answers: `• Customer loyalty – repeat purchases and retention
• Positive word-of-mouth – free marketing through recommendations
• Competitive advantage – differentiation from rivals
• Higher prices – customers pay more for good service
• Reduced marketing costs – loyal customers don't need constant advertising
• Brand reputation – seen as reliable and trustworthy
• Employee satisfaction – pride in providing good service`,
          examples: `• Customer loyalty (1) leads to repeat business (1), providing stable revenue.
• Positive word-of-mouth (1) attracts new customers (1) without advertising costs.
• Competitive advantage (1) helps retain customers (1) even when rivals offer lower prices.
• Higher prices (1) can be charged as customers value the service (1), increasing profit margins.`
        },
        {
          id: "4.3",
          question: "Explain one consequence of providing poor customer service. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a consequence and 1 mark for development.",
          answers: `• Loss of customers – customers switch to competitors
• Negative reviews – damaging online reputation
• Reduced sales – fewer purchases and referrals
• Damage to brand – poor reputation spreads
• Staff demotivation – complaints affect morale
• Increased costs – handling complaints and refunds`,
          examples: `• Loss of customers (1) as they switch to competitors offering better service (1).
• Negative reviews (1) on social media damage reputation (1) and deter potential customers.
• Reduced sales (1) occur as dissatisfied customers don't return (1) and warn others.`
        },
        {
          id: "4.4",
          question: "Explain, using an example, one way advancements in ICT have changed the ways a business manages customer service. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a way and 1 mark for explaining with an example.",
          answers: `• Live chat – instant online communication with customers
• CRM systems – databases track customer interactions and preferences
• Social media – respond to queries and complaints publicly
• Automated responses – chatbots handle common questions
• Email – quick written communication
• Mobile apps – convenient access to services`,
          examples: `• Live chat (1) allows businesses to help customers instantly online (1) without phone calls.
• CRM systems (1) store customer history enabling personalized service (1) and tracking interactions.
• Social media (1) lets businesses respond quickly to complaints (1), improving public perception.
• Chatbots (1) answer common questions 24/7 (1), reducing staff workload.`
        }
      ]
    },
    4: {
      title: "Unit 4 - Human Resources",
      questions: [
        {
          id: "1.1",
          question: "Define span of control. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The number of subordinates/workers directly managed by one supervisor or manager."
        },
        {
          id: "1.2",
          question: "Explain, using an example, chain of command. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining chain of command and 1 mark for an example with explanation.",
          answers: "• Chain of command is the line of authority and communication from top management down through the organizational hierarchy",
          examples: `• Chain of command (1) shows who reports to whom, such as a shop assistant reporting to a supervisor who reports to the store manager (1).
• In a factory, the chain of command (1) flows from the CEO to managers to supervisors to workers (1), showing reporting relationships.
• Chain of command (1) ensures instructions pass from senior management down to employees (1) through clear reporting lines.`
        },
        {
          id: "1.3",
          question: "Explain, using an example, delayering. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining delayering and 1 mark for an example with explanation.",
          answers: "• Delayering is removing one or more levels of hierarchy from an organizational structure",
          examples: `• Delayering (1) involves removing middle management positions (1) to reduce costs and speed up decision-making.
• A business removing supervisor roles (1) means workers report directly to senior managers (1), flattening the structure.
• Delayering (1) might involve removing a layer of regional managers (1) so stores report directly to head office.`
        },
        {
          id: "1.4",
          question: "What is meant by delegation? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Giving tasks to your subordinates ✓

Incorrect answers:
• Asking for more holidays
• Getting demoted to a lower position
• Losing your span of control`
        },
        {
          id: "1.5",
          question: "Explain one reason why businesses have a chain of command. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a reason and 1 mark for development.",
          answers: `• Clear authority – everyone knows who they report to
• Accountability – identifies who is responsible for decisions
• Efficient communication – messages flow up and down clearly
• Coordination – ensures different parts work together
• Decision-making clarity – defines who makes what decisions`,
          examples: `• Clear authority (1) means employees know who to ask for guidance (1) or permission.
• Accountability (1) ensures managers can be held responsible (1) for their team's performance.
• Efficient communication (1) prevents confusion (1) by establishing clear reporting lines.`
        },
        {
          id: "1.6",
          question: "Explain the difference between flat and tall organisational structures. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the difference and 1 mark for explaining it.",
          answers: `• Flat structure has few levels of hierarchy with wide span of control
• Tall structure has many levels of hierarchy with narrow span of control`,
          examples: `• Flat structure (1) has few management layers with managers supervising many employees (1).
• Tall structure (1) has many management layers with each manager supervising few employees (1).`
        },
        {
          id: "1.7",
          question: "State one advantage of a flat organisational structure. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct advantage.",
          answers: `• Faster communication / shorter chain of command
• Lower costs (fewer managers)
• Quicker decision-making
• Empowered employees
• Greater delegation
• Better communication between management and workers`
        },
        {
          id: "1.8",
          question: "Explain one way a tall organisational structure impacts communication. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an impact and 1 mark for development.",
          answers: `• Slower communication – messages pass through many levels
• Message distortion – information can be misunderstood as it passes down
• Less direct contact – senior management is distant from frontline staff
• Formal communication – more bureaucratic processes`,
          examples: `• Slower communication (1) as messages must pass through many management layers (1), causing delays.
• Message distortion (1) occurs when information is passed through multiple people (1), leading to misunderstandings.
• Less direct contact (1) means senior managers are distant from workers (1), reducing understanding of frontline issues.`
        },
        {
          id: "2.1",
          question: "Explain the difference between internal and external recruitment. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the difference and 1 mark for explaining it.",
          answers: `• Internal recruitment fills vacancies with existing employees
• External recruitment advertises positions to people outside the organization`,
          examples: `• Internal recruitment (1) promotes current staff to fill vacancies (1).
• External recruitment (1) advertises jobs to attract candidates from outside the business (1).`
        },
        {
          id: "2.2",
          question: "State two benefits of using internal recruitment. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct benefit identified ×2.",
          answers: `• Cheaper / lower recruitment costs
• Faster process
• Candidate already knows the business
• Motivates existing employees
• Reduces induction training needed
• Known employee performance/reliability
• Retains institutional knowledge`
        },
        {
          id: "2.3",
          question: "State two drawbacks of using internal recruitment. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct drawback identified ×2.",
          answers: `• Limited pool of candidates / less choice
• No fresh ideas from outside
• Creates another vacancy to fill
• May cause resentment among unsuccessful candidates
• May not have required skills internally
• Can create stagnation / lack of innovation`
        },
        {
          id: "2.4",
          question: "State two benefits of using external recruitment. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct benefit identified ×2.",
          answers: `• Wider pool of candidates / more choice
• Fresh ideas and perspectives
• May have experience from other businesses
• New skills brought into organization
• No internal politics or resentment
• May attract higher quality candidates`
        },
        {
          id: "2.5",
          question: "State two drawbacks of using external recruitment. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct drawback identified ×2.",
          answers: `• More expensive / higher recruitment costs
• Time-consuming process
• Risk of poor fit with company culture
• Candidate unknown to business
• May demotivate existing staff
• Longer induction period needed
• Higher risk of bad hire`
        },
        {
          id: "2.6",
          question: "Explain, using an example, job analysis. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining job analysis and 1 mark for an example with explanation.",
          answers: "• Job analysis is the process of examining a job role to determine the tasks, responsibilities, and requirements",
          examples: `• Job analysis (1) involves identifying what a sales assistant must do, like serving customers and handling cash (1).
• Job analysis (1) examines a manager's role to list responsibilities such as supervising staff and making decisions (1).
• A business conducting job analysis (1) identifies the skills needed for a position, such as computer literacy for an office role (1).`
        },
        {
          id: "2.7",
          question: "Which of the following best describes 'a list of daily tasks and responsibilities'? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Job description ✓

Incorrect answers:
• Person specification
• Fringe benefits
• Financial methods of motivation`
        },
        {
          id: "2.8",
          question: "State one description that may be on a person specification. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct description.",
          answers: `• Qualifications required
• Experience needed
• Skills required
• Personal qualities/characteristics
• Knowledge required
• Physical attributes`
        },
        {
          id: "2.9",
          question: "Explain two benefits of having an effective recruitment and selection process. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a benefit (AO1) and 1 mark for explaining each benefit (AO2) ×2.",
          answers: `• Right person for the job – improved performance and productivity
• Reduced staff turnover – employees stay longer
• Lower training costs – hire people with required skills
• Better motivation – satisfied employees work harder
• Improved reputation – seen as good employer
• Legal compliance – reduces discrimination risks`,
          examples: `• Right person for the job (1) leads to better performance and productivity (1).
• Reduced staff turnover (1) saves costs on recruiting and training replacements (1).
• Lower training costs (1) as candidates already have necessary skills (1).
• Better motivation (1) because employees feel suited to their roles (1), improving morale.`
        },
        {
          id: "2.10",
          question: "Explain, using an example, one disadvantage of a job share contract. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for explaining with an example.",
          answers: `• Communication issues – two people need to coordinate
• Increased complexity – managing two part-time workers
• Potential inconsistency – different working styles
• Higher administrative costs – managing two employees
• Coverage gaps – if one person is absent`,
          examples: `• Communication issues (1) as both workers must share information (1), which can lead to misunderstandings.
• Increased complexity (1) in scheduling and coordinating two people (1) for one role.
• Potential inconsistency (1) if job sharers have different approaches (1), confusing customers or colleagues.`
        },
        {
          id: "2.11",
          question: "Explain one benefit of employees that are on a full-time contract. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a benefit and 1 mark for development.",
          answers: `• Greater commitment – dedicated to the business
• Better continuity – consistent presence
• More skills development – time for training
• Stronger relationships – build rapport with colleagues and customers
• More flexibility – available for all tasks`,
          examples: `• Greater commitment (1) as full-time employees are more invested in the business (1).
• Better continuity (1) ensures consistent service to customers (1).
• More skills development (1) through additional training opportunities (1) available to full-time staff.`
        },
        {
          id: "2.12",
          question: "Explain two different job contracts. Do not mention a full time or job-sharing contract. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a contract type (AO1) and 1 mark for explaining each type (AO2) ×2.",
          answers: `Type 1: Part-time contract
Explanation: Employees work fewer hours than full-time, typically with set days or hours per week, providing flexibility for both business and employee.

Type 2: Zero-hours contract
Explanation: No guaranteed hours; employees are called in when needed, providing maximum flexibility for the employer but less security for workers.

Type 3: Temporary/fixed-term contract
Explanation: Employment for a specific period or project, ending on a predetermined date, used for seasonal work or specific projects.

Type 4: Freelance/self-employed contract
Explanation: Workers are self-employed and hired for specific tasks or projects, with no ongoing employment relationship.`,
          examples: `Part-time (1) – working three days per week instead of five (1), offering work-life balance.
Zero-hours (1) – staff called in during busy periods only (1), reducing costs but offering less job security.
Temporary (1) – hired for the Christmas season (1), ending after a fixed period.
Freelance (1) – graphic designer hired for one project (1) with no permanent employment.`
        },
        {
          id: "3.1",
          question: "Explain two advantages of having a motivated workforce. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying an advantage (AO1) and 1 mark for explaining each advantage (AO2) ×2.",
          answers: `• Higher productivity – workers produce more output
• Better quality – motivated workers take pride in work
• Lower absenteeism – fewer sick days taken
• Reduced staff turnover – employees stay longer
• Better customer service – positive attitude affects customers
• Innovation – motivated workers suggest improvements
• Lower supervision costs – workers need less monitoring`,
          examples: `• Higher productivity (1) as motivated workers work harder and faster (1), increasing output.
• Better quality (1) because motivated employees take pride in their work (1), reducing defects.
• Lower absenteeism (1) means fewer disruptions to production (1) and reduced costs.
• Reduced staff turnover (1) saves recruitment and training costs (1).`
        },
        {
          id: "3.2",
          question: "Explain two financial methods of motivation. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `• Salary – fixed annual payment providing security and stability
• Wages – payment per hour worked, with potential overtime
• Commission – percentage of sales value earned by employee
• Bonus – additional payment for achieving targets
• Profit sharing – distributing portion of profits to employees
• Performance-related pay – payment linked to individual performance
• Share ownership – giving employees company shares`,
          examples: `• Commission (1) rewards salespeople based on sales achieved (1), encouraging higher performance.
• Bonus (1) provides extra payment for meeting targets (1), motivating goal achievement.
• Profit sharing (1) gives employees a stake in success (1), encouraging them to work harder.
• Performance-related pay (1) links wages to individual output (1), rewarding high performers.`
        },
        {
          id: "3.3",
          question: "Explain two non-financial methods of motivation. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `• Job enrichment – giving more challenging and interesting work
• Job rotation – varying tasks to reduce monotony
• Autonomy/empowerment – allowing workers to make decisions
• Training and development – investing in employee skills
• Recognition – praising and acknowledging good work
• Team working – working collaboratively with others
• Flexible working – offering work-life balance options
• Career progression – opportunities for promotion`,
          examples: `• Job enrichment (1) provides more challenging tasks (1), making work more interesting and satisfying.
• Autonomy (1) allows workers to make decisions about their work (1), increasing responsibility and satisfaction.
• Recognition (1) through employee of the month awards (1) makes workers feel valued.
• Training and development (1) improves skills and career prospects (1), motivating personal growth.`
        },
        {
          id: "4.1",
          question: "Explain two benefits of providing training to employees. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a benefit (AO1) and 1 mark for explaining each benefit (AO2) ×2.",
          answers: `• Improved skills – employees work more effectively
• Higher productivity – trained workers produce more
• Better quality – fewer errors and defects
• Increased motivation – employees feel valued
• Greater flexibility – staff can cover multiple roles
• Competitive advantage – skilled workforce differentiates business
• Reduced supervision – trained workers need less monitoring
• Lower staff turnover – investment shows commitment`,
          examples: `• Improved skills (1) enable employees to work more efficiently (1), increasing output.
• Higher productivity (1) as trained workers complete tasks faster (1) with fewer mistakes.
• Increased motivation (1) because employees feel the business invests in them (1).
• Better quality (1) as skilled workers make fewer errors (1), reducing waste.`
        },
        {
          id: "4.2",
          question: "Explain the difference between on-the-job and off-the-job training. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the difference and 1 mark for explaining it.",
          answers: `• On-the-job training takes place in the workplace while doing the actual job
• Off-the-job training takes place away from the workplace, often with external providers`,
          examples: `• On-the-job (1) involves learning while working, such as shadowing experienced staff (1).
• Off-the-job (1) involves attending external courses or college (1) away from the workplace.`
        },
        {
          id: "4.3",
          question: "Define induction training. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Training given to new employees when they first join the business to introduce them to the company, its procedures, and their role."
        },
        {
          id: "4.4",
          question: "State two advantages of on-the-job training. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct advantage identified ×2.",
          answers: `• Cheaper / cost-effective
• Relevant to specific job
• Immediate application of skills
• Productive while learning
• Tailored to business needs
• Builds relationships with colleagues
• No travel or accommodation costs`
        },
        {
          id: "4.5",
          question: "State two disadvantages of off-the-job training. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct disadvantage identified ×2.",
          answers: `• Expensive / costly
• Time away from work / lost productivity
• May not be job-specific
• Travel and accommodation costs
• Disruption to business
• Employee might leave after training
• May be less relevant to business needs`
        },
        {
          id: "4.6",
          question: "State two advantages of off-the-job training. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct advantage identified ×2.",
          answers: `• Expert trainers / specialist instructors
• Better facilities and equipment
• Employees can focus without work distractions
• Recognized qualifications
• Broader perspective / industry knowledge
• Networking opportunities with other businesses
• More structured and comprehensive`
        },
        {
          id: "4.7",
          question: "State two disadvantages of on-the-job training. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct disadvantage identified ×2.",
          answers: `• Bad habits passed on from existing staff
• Disruption to normal work
• Trainer may not be expert
• Slower initial productivity
• Can be stressful for trainee
• May perpetuate poor practices
• Limited scope / narrow focus`
        },
        {
          id: "4.8",
          question: "Identify one business type that may use off-the-job training. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct business type.",
          answers: `• Professional services (accountancy, law)
• Healthcare (hospitals, medical practices)
• Engineering
• IT/Technology companies
• Construction
• Aviation
• Financial services`
        },
        {
          id: "4.9",
          question: "Explain one reason why a business may use induction training. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a reason and 1 mark for development.",
          answers: `• Familiarize with procedures – ensure new staff understand company processes
• Health and safety – comply with legal requirements
• Reduce anxiety – help new employees settle in
• Improve productivity – get workers up to speed quickly
• Build culture – introduce company values and expectations
• Reduce errors – ensure correct procedures are followed`,
          examples: `• Familiarize with procedures (1) ensures new staff know how to use equipment safely (1).
• Health and safety (1) is legally required and prevents accidents (1).
• Reduce anxiety (1) helps new employees feel comfortable (1), improving early performance.`
        }
      ]
    },
    5: {
      title: "Unit 5 - Marketing",
      questions: [
        {
          id: "1.1",
          question: "Explain, using examples, two reasons why it is important that a business identifies and satisfies the needs of its customers. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a reason (AO1) and 1 mark for explaining with example (AO2) ×2.",
          answers: `• Increased sales – meeting needs encourages purchases
• Customer loyalty – satisfied customers return
• Competitive advantage – better service than rivals
• Positive reputation – word-of-mouth recommendations
• Reduced waste – produce what customers want
• Premium pricing – can charge more for meeting needs`,
          examples: `• Increased sales (1) as customers buy products that meet their needs, such as a bakery selling gluten-free bread (1) for customers with dietary requirements.
• Customer loyalty (1) develops when needs are met, like Amazon's fast delivery (1) encouraging repeat purchases.
• Competitive advantage (1) comes from understanding needs better than rivals, such as Netflix offering personalized recommendations (1).`
        },
        {
          id: "1.2",
          question: "Bilal's Bikes offers high-quality, responsibly sourced bicycles and accessories through its stores and online shop. Before launching its new range, the business conducted a focus group with UK customers and found that many were very concerned about the environment. As a result, Bilal's Bikes decided to use eco-friendly materials and suppliers to reduce its environmental impact. This helped the business appeal to environmentally conscious customers and has proven to increase sales. (i) Explain one way Bilal's Bikes satisfies the needs of its UK customers. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a way and 1 mark for development using context.",
          answers: `• Using eco-friendly materials – meets environmental concerns
• Conducting market research – understands customer priorities
• Offering online shopping – provides convenience
• High-quality products – meets quality expectations`,
          examples: `• Using eco-friendly materials (1) satisfies customers' environmental concerns (1) identified in the focus group.
• Conducting focus groups (1) ensures products match customer values (1) regarding sustainability.`
        },
        {
          id: "1.2ii",
          question: "(ii) State one benefit to Bilal's Bikes satisfying the needs of its UK customers. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct benefit.",
          answers: `• Increased sales
• Customer loyalty
• Positive reputation
• Competitive advantage
• Premium pricing
• Positive word-of-mouth`
        },
        {
          id: "2.1",
          question: "Define market segmentation. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• Dividing a market into distinct groups of customers with similar needs, characteristics, or behaviors."
        },
        {
          id: "2.2",
          question: "Identify two ways a business can segment its market. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct method identified ×2.",
          answers: `• Age / demographics
• Gender
• Income / social class
• Location / geography
• Lifestyle / psychographics
• Behavior / usage patterns
• Ethnicity / culture`
        },
        {
          id: "2.3",
          question: "Bilal's Threads is a UK-based clothing retailer that sells fashionable and affordable clothing both in-store and online. The business offers separate ranges for men and women and advertises to these groups separately. Market research showed that male and female customers often look for different styles, colours, and fits. (i) Identify and explain one way Bilal's Threads segments its market. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying segmentation method and 1 mark for explaining using context.",
          answers: "• Gender segmentation – dividing market by male and female customers",
          examples: `• Gender segmentation (1) by offering separate ranges for men and women (1) based on different style preferences.
• Demographic segmentation by gender (1) because research shows males and females want different products (1).`
        },
        {
          id: "2.3ii",
          question: "(ii) Explain one potential benefit of Bilal's Threads appropriately marketing by their chosen method of segmentation. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a benefit and 1 mark for development.",
          answers: `• Targeted marketing – more effective advertising
• Better product development – products match customer needs
• Increased sales – customers find relevant products
• Customer satisfaction – products meet expectations
• Competitive advantage – better than rivals at meeting needs`,
          examples: `• Targeted marketing (1) allows advertising to be designed specifically for men or women (1), making it more effective.
• Better product development (1) as products are designed for specific customer groups (1), increasing appeal.
• Increased sales (1) because customers find products that match their preferences (1).`
        },
        {
          id: "3.1",
          question: "Identify two pieces of information a business collects through market research. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct piece of information identified ×2.",
          answers: `• Customer preferences / needs
• Competitor information
• Market size
• Pricing information
• Product feedback
• Customer demographics
• Buying behavior
• Brand awareness
• Market trends`
        },
        {
          id: "3.2",
          question: "Explain two reasons why a business conducts market research. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a reason (AO1) and 1 mark for explaining each reason (AO2) ×2.",
          answers: `• Identify customer needs – understand what customers want
• Reduce risk – make informed decisions rather than guessing
• Identify opportunities – find gaps in the market
• Monitor competition – understand rival strategies
• Test products – gather feedback before launch
• Measure satisfaction – understand customer opinions
• Track market changes – adapt to trends`,
          examples: `• Identify customer needs (1) ensures products match what customers actually want (1), reducing failure risk.
• Reduce risk (1) by basing decisions on data rather than guesswork (1), avoiding costly mistakes.
• Identify opportunities (1) reveals unmet needs in the market (1), enabling new product development.
• Monitor competition (1) helps businesses understand what rivals offer (1) to stay competitive.`
        },
        {
          id: "3.3",
          question: "Explain one difference between qualitative and quantitative market research. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the difference and 1 mark for explaining it.",
          answers: `• Qualitative focuses on opinions, feelings, and reasons (why)
• Quantitative focuses on numerical data and statistics (how many)`,
          examples: `• Qualitative (1) gathers opinions through interviews about why customers prefer a product (1).
• Quantitative (1) collects numerical data like how many customers bought a product (1).`
        },
        {
          id: "3.4",
          question: "Identify three methods of market research. [3 marks]",
          marks: "AO1 – 3 marks",
          scheme: "1 mark for each correct method identified ×3.",
          answers: `• Surveys / questionnaires
• Focus groups
• Interviews
• Observation
• Internet research
• Government publications
• Market reports
• Social media analysis
• Test marketing
• Sales data analysis`
        },
        {
          id: "3.5",
          question: "Identify two pieces of information a business collects through market research. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct piece of information identified ×2.",
          answers: `• Customer preferences / needs
• Competitor information
• Market size
• Pricing information
• Product feedback
• Customer demographics
• Buying behavior
• Brand awareness
• Market trends`
        },
        {
          id: "3.6",
          question: "Which of the following is an example of secondary market research? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Newspapers ✓

Incorrect answers:
• Feedback from suppliers
• Focus groups
• Telephone surveys`
        },
        {
          id: "3.7i",
          question: "Bilal's Spices sells authentic spice blends. Figure 1 shows a survey of 500 people. Using Figure 1, calculate the difference in the amount of people that chose Garam Masala over Coriander. Give your answer as a percentage. [3 marks]",
          marks: "AO2 – 3 marks",
          scheme: "1 mark for calculating the numerical difference. 1 mark for showing percentage calculation formula. 1 mark for correct percentage.",
          answers: `Note: Without actual Figure 1 data, this is the approach:
Step 1: Find difference between Garam Masala and Coriander numbers
Step 2: Percentage = (Difference ÷ Total surveyed) × 100
Step 3: State final percentage

Example: If Garam Masala = 150 and Coriander = 100:
Difference = 150 - 100 = 50
Percentage = (50 ÷ 500) × 100 = 10%`,
          note: "Own figure rule applies."
        },
        {
          id: "3.7ii",
          question: "(ii) 44 people chose Paprika. Show this on Figure 1. [1 mark]",
          marks: "AO2 – 1 mark",
          scheme: "1 mark for correctly representing 44 people on the chart/graph.",
          answers: "• Mark should show 44 people (8.8% of 500) in appropriate format on Figure 1."
        },
        {
          id: "3.7iii",
          question: "(iii) Work out the number of people that chose Cumin. [3 marks]",
          marks: "AO2 – 3 marks",
          scheme: "1 mark for identifying method. 1 mark for showing working. 1 mark for correct answer.",
          answers: `Method: Total (500) minus all other categories
Working should show: 500 - (sum of all other spices)

Example approach:
500 - Garam Masala - Coriander - Paprika - (other spices) = Cumin`,
          note: "Own figure rule applies. Award marks for correct method even if earlier calculations were incorrect."
        },
        {
          id: "3.7iv",
          question: "(iv) Explain one drawback to Bilal of using secondary market research. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a drawback and 1 mark for development.",
          answers: `• May be outdated – doesn't reflect current trends
• Not specific to business – general data not tailored
• May be biased – collected for different purposes
• Incomplete information – doesn't answer specific questions
• Reliability concerns – unknown source quality`,
          examples: `• May be outdated (1) as industry reports are several years old (1), not reflecting current spice trends.
• Not specific (1) as government data doesn't address Bilal's particular products or customers (1).`
        },
        {
          id: "3.7v",
          question: "(v) Identify and explain one other method of market research Bilal could have used. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a method and 1 mark for explaining it.",
          answers: `• Focus groups – small group discussions to explore preferences in depth
• Customer surveys – questionnaires about spice preferences
• Taste testing – letting customers sample products
• Online surveys – reaching customers through website or social media
• Competitor analysis – observing what rival spice companies sell`,
          examples: `• Focus groups (1) could gather detailed opinions about spice flavors and packaging (1).
• Taste testing (1) allows customers to try products and give immediate feedback (1).
• Online surveys (1) reach existing customers quickly through email or website (1).`
        },
        {
          id: "3.8",
          question: "In 2024, Bilal's Adventure Park had a 15.2% share of the £820 million UK theme park market. Calculate Bilal's Adventure Park's annual revenue. [3 marks]",
          marks: "AO2 – 3 marks",
          scheme: "1 mark for identifying method. 1 mark for showing calculation. 1 mark for correct answer.",
          answers: `Formula: Market share % × Total market size
Calculation: 15.2% × £820 million = 0.152 × £820 million = £124.64 million

Annual revenue: £124.64 million`,
          note: "Accept £124,640,000 or equivalent."
        },
        {
          id: "3.9",
          question: "Explain the difference between market size and market share. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining both terms and 1 mark for explaining the difference.",
          answers: `• Market size is the total value or volume of sales in the entire market
• Market share is the percentage or proportion of the market held by one business`,
          examples: `• Market size (1) is the total sales in an industry, while market share is one business's portion (1).
• Market size measures the whole market (1), whereas market share shows a business's percentage of that market (1).`
        },
        {
          id: "4.1",
          question: "Explain the difference between price penetration and price skimming. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining both strategies and 1 mark for explaining the difference.",
          answers: `• Price penetration sets low prices to gain market share quickly
• Price skimming sets high initial prices for new/innovative products`,
          examples: `• Price penetration (1) uses low prices to attract customers quickly (1), building market share.
• Price skimming (1) charges premium prices initially (1) for new products with little competition.`
        },
        {
          id: "4.2",
          question: "Explain, using an example, competitive pricing. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining competitive pricing and 1 mark for an example with explanation.",
          answers: "• Competitive pricing sets prices similar to competitors in the market",
          examples: `• Competitive pricing (1) means Tesco prices products similarly to Asda (1) to remain attractive to customers.
• Supermarkets use competitive pricing (1) by matching rival prices on key products like bread and milk (1).
• Competitive pricing (1) involves setting petrol prices close to nearby stations (1) to avoid losing customers.`
        },
        {
          id: "4.3",
          question: "State two disadvantages of using the loss leader pricing method. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct disadvantage identified ×2.",
          answers: `• Reduces profit margins on loss leader products
• Customers may only buy the discounted item
• Can damage brand image / perceived quality
• Not sustainable long-term
• May start price war with competitors
• Requires high volume to compensate for losses`
        },
        {
          id: "4.4",
          question: "Explain, using an example, cost-plus pricing. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining cost-plus pricing and 1 mark for an example with explanation.",
          answers: "• Cost-plus pricing adds a markup or percentage to the cost of production to determine the selling price",
          examples: `• Cost-plus pricing (1) means if a product costs £10 to make, adding 50% markup sets price at £15 (1).
• A bakery using cost-plus (1) calculates ingredient costs then adds a fixed percentage for profit (1).
• Cost-plus pricing (1) involves adding £5 profit to a £20 production cost, selling at £25 (1).`
        },
        {
          id: "4.5",
          question: "State two internal factors that influence pricing decisions in a business. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct factor identified ×2.",
          answers: `• Costs of production
• Business objectives (profit vs market share)
• Product life cycle stage
• Marketing strategy / positioning
• Brand image
• Quality level
• Capacity / production levels`
        },
        {
          id: "4.6",
          question: "State and explain two external factors that influence pricing decisions. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a factor (AO1) and 1 mark for explaining each factor (AO2) ×2.",
          answers: `Factor 1: Competition
Explanation: The number and pricing strategies of competitors affect what price a business can charge; intense competition limits pricing power.

Factor 2: Customer demand / Price elasticity
Explanation: How sensitive customers are to price changes influences whether prices can be raised or must be lowered to maintain sales.

Factor 3: Economic conditions
Explanation: During recession, customers have less disposable income, forcing businesses to lower prices or offer discounts.

Factor 4: Legal factors
Explanation: Minimum pricing laws or regulations can restrict pricing freedom, such as minimum alcohol pricing.`,
          examples: `Competition (1) limits prices as businesses must match rivals (1) to avoid losing customers.
Customer demand (1) determines whether price increases will reduce sales (1) significantly.`
        },
        {
          id: "4.7",
          question: "As prices increase, demand is likely to __________. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: "• decrease / fall / reduce / go down"
        },
        {
          id: "4.8",
          question: "As demand increases, prices are likely to __________. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: "• increase / rise / go up"
        },
        {
          id: "4.9",
          question: "Explain one drawback of developing new products. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a drawback and 1 mark for development.",
          answers: `• High costs – expensive research, development, and testing
• Risk of failure – most new products fail
• Time-consuming – takes long time to develop
• Opportunity cost – resources could be used elsewhere
• Cannibalization – may reduce sales of existing products`,
          examples: `• High costs (1) of research and development may not be recovered (1) if the product fails.
• Risk of failure (1) means investment may be wasted (1) if customers don't want the product.
• Time-consuming (1) delays potential revenue (1) while development continues.`
        },
        {
          id: "4.10",
          question: "Explain what is meant by product differentiation, and its importance. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining product differentiation and 1 mark for explaining importance.",
          answers: "• Product differentiation is making a product distinct from competitors through unique features, quality, branding, or design",
          examples: `• Product differentiation (1) is important as it reduces direct price competition (1) by making products unique.
• Differentiation (1) allows businesses to charge premium prices (1) for distinctive features.
• Differentiation (1) creates customer loyalty (1) to specific brands or products.`
        },
        {
          id: "4.11",
          question: "Define unique selling point (USP). [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• A feature or characteristic that makes a product different from and better than competitors' products."
        },
        {
          id: "4.12",
          question: "Label parts A-E of the product lifecycle graph. [5 marks]",
          marks: "AO1 – 5 marks",
          scheme: "1 mark for each correctly labeled stage ×5.",
          answers: `A: Development / Research and Development
B: Introduction / Launch
C: Growth
D: Maturity
E: Decline`
        },
        {
          id: "4.13",
          question: "Explain what is meant by an extension strategy. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining extension strategy and 1 mark for development.",
          answers: "• Extension strategy is an action taken to prolong the life of a product and prevent or delay decline",
          examples: `• Extension strategy (1) involves actions like advertising or redesigning (1) to maintain sales during maturity.
• Extension strategy (1) aims to revitalize a product (1) and extend its profitable life.`
        },
        {
          id: "4.14",
          question: "State and explain two extension strategies. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a strategy (AO1) and 1 mark for explaining each strategy (AO2) ×2.",
          answers: `Strategy 1: New packaging/redesign
Explanation: Updating product appearance or packaging to make it more appealing and attract attention, giving the product a fresh look.

Strategy 2: Price reduction/promotion
Explanation: Lowering prices or offering special deals to stimulate demand and attract new customers or encourage existing ones to buy more.

Strategy 3: New markets
Explanation: Finding new customer segments or geographical areas to sell the product, expanding the potential customer base.

Strategy 4: Advertising campaign
Explanation: Increased promotion to remind customers about the product and maintain awareness, preventing sales decline.

Strategy 5: Adding new features/improvements
Explanation: Enhancing the product with additional functions or improved quality to increase its appeal and competitiveness.`,
          examples: `New packaging (1) refreshes the brand image and attracts customer attention (1) in stores.
Price reduction (1) encourages trial by new customers (1) and increases sales volume.`
        },
        {
          id: "4.15",
          question: "State at what stage of the product life cycle would using an extension strategy be most appropriate. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct stage.",
          answers: "• Maturity (stage) / (Late) maturity / End of maturity / Decline (stage)"
        },
        {
          id: "4.16",
          question: "Define product portfolio. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for a correct definition.",
          answers: "• The range of different products or brands that a business sells."
        },
        {
          id: "4.17",
          question: "Identify the label of a product in box X on the Boston Matrix. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct label. Note: Box X location must be specified in actual question.",
          answers: `Possible labels depending on box position:
• Star (high market share, high market growth)
• Cash Cow (high market share, low market growth)
• Question Mark / Problem Child (low market share, high market growth)
• Dog (low market share, low market growth)`,
          note: "Answer depends on which box is marked X in the diagram."
        },
        {
          id: "4.18",
          question: "Describe the characteristics of a 'star' product. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct characteristic ×2.",
          answers: `• High market share in a high-growth market
• Requires significant investment to maintain position
• Generates high sales revenue
• Has potential to become a cash cow
• Faces strong competition
• Profitable but needs reinvestment`
        },
        {
          id: "4.19",
          question: "Explain one way the Boston Matrix could help a business decide what products to invest in or remove. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a way and 1 mark for development.",
          answers: `• Identifies weak products (dogs) – shows which products to remove or discontinue
• Highlights growth opportunities (stars/question marks) – shows where to invest
• Shows cash generators (cash cows) – identifies products funding other investments
• Reveals portfolio balance – ensures mix of products across categories`,
          examples: `• Identifies dogs (1) with low share in low-growth markets (1), suggesting removal or minimal investment.
• Highlights stars (1) that need investment to maintain growth (1) and become future cash cows.
• Shows cash cows (1) generating funds to invest in question marks or stars (1).`
        },
        {
          id: "4.20",
          question: "Explain the difference between advertising and sales promotion. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for defining both and 1 mark for explaining the difference.",
          answers: `• Advertising is paid communication through media to inform or persuade customers
• Sales promotion offers short-term incentives to encourage immediate purchase`,
          examples: `• Advertising (1) builds long-term brand awareness through media (1), while sales promotion offers immediate incentives.
• Sales promotion (1) provides short-term offers like discounts (1), whereas advertising focuses on brand building.`
        },
        {
          id: "4.21",
          question: "State two methods of advertising. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct method identified ×2.",
          answers: `• Television
• Radio
• Newspapers / magazines / print media
• Online / internet / social media
• Billboards / posters / outdoor
• Cinema
• Direct mail
• Sponsorship`
        },
        {
          id: "4.22",
          question: "State and explain two methods of sales promotion. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for stating a method (AO1) and 1 mark for explaining each method (AO2) ×2.",
          answers: `Method 1: BOGOF (Buy One Get One Free)
Explanation: Customers receive a free product when they purchase one at full price, encouraging bulk buying and trial of products.

Method 2: Discounts / Price reductions
Explanation: Temporary reduction in price to stimulate demand and clear stock, attracting price-sensitive customers.

Method 3: Loyalty cards / rewards
Explanation: Points or rewards given for repeat purchases, encouraging customer retention and repeat business.

Method 4: Free samples
Explanation: Giving away small quantities of product for customers to try, encouraging trial and future purchases.

Method 5: Competitions / prize draws
Explanation: Customers enter to win prizes by purchasing products, creating excitement and increasing sales.`,
          examples: `BOGOF (1) encourages customers to buy more by offering extra value (1).
Loyalty cards (1) reward repeat customers with points or discounts (1), building retention.`
        },
        {
          id: "4.23",
          question: "Explain one type of public relations (PR) activity that a business might use. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a PR activity and 1 mark for development.",
          answers: `• Press releases – sending news stories to media
• Sponsorship – supporting events or causes
• Charity work – supporting community projects
• Social media engagement – building online presence
• Events – hosting launches or open days`,
          examples: `• Press releases (1) inform media about new products or achievements (1), generating free publicity.
• Sponsorship (1) associates the brand with popular events (1), improving image and awareness.
• Charity work (1) demonstrates social responsibility (1), enhancing reputation.`
        },
        {
          id: "4.24",
          question: "State two reasons for promotion. [2 marks]",
          marks: "AO1 – 2 marks",
          scheme: "1 mark for each correct reason identified ×2.",
          answers: `• Increase awareness / inform customers
• Increase sales
• Launch new products
• Build brand image
• Differentiate from competitors
• Remind customers about product
• Encourage trial
• Build customer loyalty`
        },
        {
          id: "4.25",
          question: "Explain two factors that influence the selection of the promotional mix. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "1 mark for identifying a factor (AO1) and 1 mark for explaining each factor (AO2) ×2.",
          answers: `• Budget available – limited funds restrict promotional options
• Target market – different audiences respond to different methods
• Product type – complex products need different promotion than simple ones
• Competition – need to match or exceed rival promotional efforts
• Stage of product life cycle – different stages require different promotion
• Legal restrictions – some products face advertising regulations`,
          examples: `• Budget available (1) determines which media can be afforded (1), with small budgets limiting to cheaper options like social media.
• Target market (1) influences choice as younger audiences prefer social media (1) while older audiences respond to TV or newspapers.
• Product type (1) affects promotion as business products need trade shows (1) while consumer goods use mass advertising.
• Competition (1) requires businesses to promote heavily (1) to maintain visibility against rivals.`
        },
        {
          id: "4.26",
          question: "Explain one disadvantage of using samples as a method of sales promotion. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying a disadvantage and 1 mark for development.",
          answers: `• Expensive – cost of producing and distributing samples
• Wasteful – many samples may not lead to purchases
• Attracts wrong customers – people who only want free items
• Reduces profit – giving away products for free`,
          examples: `• Expensive (1) as producing and distributing free samples costs money (1) without guaranteed sales.
• Wasteful (1) because many people take samples without buying (1) the full product.
• Attracts wrong customers (1) who only want free items (1) and never intend to purchase.`
        },
        {
          id: "4.27",
          question: "Explain one advantage of a strong brand image for a business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Customer loyalty – repeat purchases
• Premium pricing – can charge more
• Easier product launches – new products accepted quickly
• Competitive advantage – differentiation from rivals
• Attracts quality employees – people want to work for recognized brands`,
          examples: `• Customer loyalty (1) leads to repeat purchases (1) and stable revenue.
• Premium pricing (1) allows higher prices due to perceived quality (1), increasing profit margins.
• Easier product launches (1) as customers trust the brand (1) and are willing to try new products.`
        },
        {
          id: "4.28",
          question: "Which element of the marketing mix involves selecting a channel of distribution? Tick (✔) one box. [1 mark]",
          marks: "AO1 – 1 mark",
          scheme: "1 mark for the correct answer.",
          answers: `Correct answer:
• Place ✓

Incorrect answers:
• Price
• Product
• Promotion`
        },
        {
          id: "4.29",
          question: "A small bakery wants to sell cakes to local customers. Explain one advantage of using a retailer to sell its products. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development.",
          answers: `• Wider reach – access to retailer's customers
• Reduced costs – don't need own shop
• Expertise – retailer handles sales and customer service
• Credibility – association with established retailer
• Focus on production – bakery can focus on making cakes`,
          examples: `• Wider reach (1) as the retailer has established customer base (1) the bakery can access.
• Reduced costs (1) as the bakery doesn't need to run its own shop (1), saving on rent and staff.
• Expertise (1) as the retailer handles selling and customer service (1), allowing bakery to focus on production.`
        },
        {
          id: "4.30",
          question: "Compare the suitability of using wholesalers vs. telesales for a company that sells kitchen appliances across the UK. [4 marks]",
          marks: "AO1 – 2 marks, AO2 – 2 marks",
          scheme: "Marks awarded for analysis comparing both methods, considering advantages and disadvantages of each in context.",
          answers: `Points to consider:
• Wholesalers provide bulk distribution to retailers but reduce profit margins
• Telesales offers direct contact with customers but is labor-intensive
• Wholesalers suitable for wide geographical coverage
• Telesales better for high-value items requiring explanation
• Cost implications of each method
• Customer preferences for appliance purchasing`,
          examples: `Wholesalers (1) provide wide distribution across the UK through retailers (1), but telesales allows direct customer contact (1) which may be important for expensive appliances requiring explanation (1).

Wholesalers are more suitable (1) for reaching many retailers efficiently (1), whereas telesales is better for high-value items (1) where customers need detailed information before purchasing (1).`,
          note: "Award marks for balanced comparison showing understanding of both methods in context."
        },
        {
          id: "4.31",
          question: "Explain one difference between e-commerce and m-commerce. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying the difference and 1 mark for explaining it.",
          answers: `• E-commerce is buying/selling online through computers/laptops
• M-commerce is buying/selling through mobile devices/smartphones`,
          examples: `• E-commerce (1) uses computers or laptops for online purchases (1).
• M-commerce (1) specifically uses mobile phones or tablets (1) for wireless transactions.`
        },
        {
          id: "4.32",
          question: "A small clothing business wants to sell its products internationally. Explain one advantage of using e-commerce for this business. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an advantage and 1 mark for development in context.",
          answers: `• Global reach – access to international customers
• Lower costs – no need for physical stores abroad
• 24/7 operation – sell any time across time zones
• Easy market entry – quick setup in new countries`,
          examples: `• Global reach (1) allows selling to customers worldwide (1) without physical stores in each country.
• Lower costs (1) as no need for expensive retail premises abroad (1), reducing overheads.
• 24/7 operation (1) enables sales across different time zones (1), maximizing revenue opportunities.`
        },
        {
          id: "4.33",
          question: "State and explain, using examples, one impact changing the price of a product has on the rest of marketing mix. [2 marks]",
          marks: "AO1 – 1 mark, AO2 – 1 mark",
          scheme: "1 mark for identifying an impact and 1 mark for explaining with example.",
          answers: `• Affects promotion – pricing influences advertising strategy
• Affects place – distribution channels change with price
• Affects product perception – price impacts perceived quality`,
          examples: `• Affects promotion (1) as premium prices require luxury advertising (1), while low prices need value-focused promotion.
• Affects place (1) as high-priced products suit upmarket retailers (1), while low prices fit discount stores.
• Affects product perception (1) as higher prices suggest premium quality (1), requiring quality packaging and presentation.`
        }
      ]
    },
    6: {
      title: "Unit 6 - Finance",
      questions: []
    }
  };

  // Filter questions based on search term
  const filteredQuestions = useMemo(() => {
    if (!selectedUnit || !searchTerm.trim()) return null;
    
    const questions = markSchemes[selectedUnit].questions;
    const term = searchTerm.toLowerCase();
    
    return questions.filter(q => 
      q.id.toLowerCase().includes(term) ||
      q.question.toLowerCase().includes(term)
    );
  }, [selectedUnit, searchTerm]);

  const displayQuestions = searchTerm.trim() && selectedUnit 
    ? filteredQuestions 
    : selectedUnit 
      ? markSchemes[selectedUnit].questions 
      : null;

  const renderQuestion = (q) => (
    <div key={q.id} className="mb-8 p-6 bg-white border-2 border-gray-300 rounded-lg">
      <table className="w-full border-collapse border-2 border-black">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border-2 border-black p-3 font-bold">
              {q.id}
            </td>
            <td className="border-2 border-black p-3">
              {q.question}
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-4 space-y-3">
        <p className="font-bold">Marks for this question: {q.marks}</p>
        <p>{q.scheme}</p>
        
        {q.answers && (
          <div>
            <p className="font-bold">Answers may include:</p>
            <pre className="whitespace-pre-wrap font-sans">{q.answers}</pre>
          </div>
        )}
        
        {q.examples && (
          <div>
            <p className="font-bold">Examples of developed answers:</p>
            <pre className="whitespace-pre-wrap font-sans">{q.examples}</pre>
          </div>
        )}
        
        {q.note && (
          <div>
            <p className="font-bold">Markers note:</p>
            <p className="italic">{q.note}</p>
          </div>
        )}
      </div>
    </div>
  );

  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">AQA GCSE Business</h1>
          <h2 className="text-2xl font-bold text-center mb-8">Mark Scheme Navigator</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6 text-center">Select a unit to view the mark scheme:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(markSchemes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedUnit(parseInt(key))}
                  className="p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-left transition-colors"
                >
                  <div className="font-bold text-xl mb-2">Unit {key}</div>
                  <div className="text-sm">{value.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="bg-white shadow-md sticky top-0 z-10 border-b-2 border-gray-300">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => { setSelectedUnit(null); setSearchTerm(''); }}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
            >
              ← Back to Units
            </button>
            <h1 className="text-2xl font-bold">
              Unit {selectedUnit}: {markSchemes[selectedUnit].title}
            </h1>
            <div className="w-24"></div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by question number (e.g., 1.1) or question text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8 border-2 border-gray-300">
          <pre className="whitespace-pre-wrap font-sans">{introductionContent}</pre>
        </div>

        {/* Questions */}
        {displayQuestions && displayQuestions.length > 0 ? (
          displayQuestions.map(renderQuestion)
        ) : displayQuestions && displayQuestions.length === 0 ? (
          <div className="text-center text-gray-600 p-8">
            No questions found matching "{searchTerm}"
          </div>
        ) : markSchemes[selectedUnit].questions.length === 0 ? (
          <div className="text-center text-gray-600 p-8">
            Mark scheme for this unit is currently being developed.
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MarkSchemeApp;