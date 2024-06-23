import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Box, useMantineTheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import Survey from "../../component/survey/Survey";
import { useGetAssessmentQuery } from "../../store/api";
// import { surveyData } from "../../utility/data";

export default function Assessment() {
  const [backNext, setBackNext] = useState("next");
  const [selectedCategory, setSelectedCategory] = useState("Introduction");
  console.log("🚀 ~ Assessment ~ selectedCategory:", selectedCategory, setSelectedCategory);
  useGetAssessmentQuery();
  const theme = useMantineTheme();
  // const renderData = surveyData?.data?.data?.categories?.Introduction?.questionFlow;
  const renderData =
    useSelector((state: any) => state?.userReducer?.assessmentList?.data?.categories) || [];
  // personal-info

  const JsonData = {
    questionFlow: [
      {
        question: {
          question_key: "personal_info-name_dob",
          category: "Personal Info",
          question: "Your name and date of birth",
          type: "Multi Q",
          sub_text:
            "Make sure you type your name and date of birth as it's shown on your passport or driver's license. Make sure to not use any nicknames or shortened names.",
          help_text:
            "<h3> \n Why are we asking this? \n </h3> \n <p> \nBy law, HMRC requires these details to confirm your identity. \n </p>",
          submit: "personal_info-country",
          sub_questions: [
            "personal_info-first_name",
            "personal_info-last_name",
            "personal_info-date_of_birth",
          ],
          required: true,
          questionObjects: [
            {
              question: {
                question_key: "personal_info-first_name",
                category: "Personal Info",
                question: "First name",
                type: "Free text",
                parent_question: "personal_info-name_dob",
                placeholder: "John",
                validation: {
                  regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
                  title: "Please enter a real name",
                },
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: null,
            },
            {
              question: {
                question_key: "personal_info-last_name",
                category: "Personal Info",
                question: "Last name",
                type: "Free text",
                parent_question: "personal_info-name_dob",
                placeholder: "Smith",
                validation: {
                  regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£]{1,56}$",
                  title: "Please enter your last name",
                },
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: null,
            },
            {
              question: {
                question_key: "personal_info-date_of_birth",
                category: "Personal Info",
                question: "Date of birth",
                type: "Date",
                parent_question: "personal_info-name_dob",
                validation: {
                  minDate: "1851-01-01",
                  maxDate: "2008-04-05",
                  title: "Please enter a valid date of birth",
                },
                required: true,
                sub_text: null,
                help_text: null,
                tax_year: "2023/2024",
              },
              answer: null,
            },
          ],
        },
        answer: {
          "personal_info-first_name": null,
          "personal_info-last_name": null,
          "personal_info-date_of_birth": null,
        },
      },
      {
        question: {
          question_key: "personal_info-country",
          category: "Personal Info",
          question: "Please select your region.",
          type: "Single Choice",
          sub_text:
            "<p>Please note, if you select:</p>\n<ul>\n    <li>Scotland: we will apply the Scottish tax rates to your tax return.</li>\n    <li>Non-UK: we will not send your address to HMRC, as HMRC only accept UK addresses to be included on the digital tax return</li>\n</ul>",
          submit: "personal_info-address",
          choices: [
            {
              key: "__scotland",
              name: "Scotland",
              skip: true,
            },
            {
              key: "__wales",
              name: "Wales",
              skip: true,
            },
            {
              key: "__rest_of_uk",
              name: "England / NI / Channel Islands",
              skip: true,
            },
            {
              key: "__other",
              name: "Non-UK",
              skip: true,
            },
          ],
          required: true,
          help_text: null,
        },
        answer: null,
      },
      {
        question: {
          question_key: "personal_info-address",
          category: "Personal Info",
          question: "Your address",
          type: "Address",
          sub_text:
            "Enter your address as shown in letters you've received from HMRC, council tax, or energy suppliers.\n<i>Note that this address is primarily for communication from HMRC, it will not affect your tax residency if you live abroad.</i>",
          help_text:
            "<h3> \n Why are we asking this? \n </h3> \n <p>HMRC require your address details in order to submit your tax return. </p> \n <p>Your place of residence will also affect how much tax you need to pay. For example, if you live in Scotland you would pay the Scottish rates of tax.</p>\n<p>Enter your address as shown in letters you've received from HMRC, council tax, or energy suppliers.</p>",
          submit: "personal_info-uk_address_invalid",
          address_questions: {
            line_1: "personal_info-address_line_1",
            line_2: "personal_info-address_line_2",
            town: "personal_info-city",
            county: "personal_info-county",
            postcode: "personal_info-postal_code",
            country: "personal_info-country-select",
          },
          required: true,
          sub_questions: [
            "personal_info-address_line_1",
            "personal_info-address_line_2",
            "personal_info-city",
            "personal_info-county",
            "personal_info-postal_code",
            "personal_info-country-select",
          ],
          ukOnly: false,
          questionObjects: [
            {
              question: {
                question_key: "personal_info-address_line_1",
                category: "Personal Info",
                question: "Address line 1",
                type: "Free text",
                parent_question: "personal_info-address",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: "Balasore Baripada Road",
            },
            {
              question: {
                question_key: "personal_info-address_line_2",
                category: "Personal Info",
                question: "Address line 2",
                type: "Free text",
                parent_question: "personal_info-address",
                sub_text: null,
                help_text: null,
              },
              answer: "Januganj",
            },
            {
              question: {
                question_key: "personal_info-city",
                category: "Personal Info",
                question: "City",
                type: "Free text",
                parent_question: "personal_info-address",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: "Remuna",
            },
            {
              question: {
                question_key: "personal_info-county",
                category: "Personal Info",
                question: "County or Council",
                type: "Free text",
                parent_question: "personal_info-address",
                sub_text: null,
                help_text: null,
              },
              answer: "Odisha",
            },
            {
              question: {
                question_key: "personal_info-postal_code",
                category: "Personal Info",
                question: "Postcode",
                type: "Postcode",
                parent_question: "personal_info-address",
                sub_text: null,
                help_text: null,
              },
              answer: "756001",
            },
            {
              question: {
                question_key: "personal_info-country-select",
                category: "Personal Info",
                question: "Country",
                type: "Free text",
                parent_question: "personal_info-address",
                required: true,
                sub_text: null,
                help_text: null,
              },
              answer: "India",
            },
          ],
        },
        answer: {
          "personal_info-address_line_1": "Balasore Baripada Road",
          "personal_info-address_line_2": "Januganj",
          "personal_info-city": "Remuna",
          "personal_info-county": "Odisha",
          "personal_info-postal_code": "756001",
          "personal_info-country-select": "India",
        },
      },
      {
        question: {
          question_key: "personal_info-moved_multi",
          category: "Personal Info",
          question: "Did you move into this address within the past 24 months?",
          type: "Boolean Multi",
          sub_text:
            "If you did, we will update HMRC with your new address details.\n<p><i>Unless you have a non-UK address. As HMRC only accept UK addresses to be updated digitally. \nIt's therefore essential to separately update your address with HMRC.</i></p>",
          help_text:
            "<h3>Do you have a new address?</h3>\n<p>You may have moved address since your last tax return, or this may be the first time you've filed a tax return. Since you registered for your <strong>Unique Taxpayer Reference (UTR)</strong>, we need to provide HMRC with your new address.</p>",
          submit: "personal_info-telephone",
          sub_questions: [
            {
              boolean_key: "personal_info-moved_recently",
              show_on: true,
              questions: ["personal_info-address_date"],
            },
          ],
          required: true,
          questionObjects: [
            {
              booleanQuestion: {
                question: {
                  question_key: "personal_info-moved_recently",
                  category: "Personal Info",
                  question: "Did you move into this address within the last 24 months?",
                  type: "Boolean",
                  sub_text:
                    "If you moved within the last 24 months, we will update HMRC with your new address details.",
                  parent_question: "personal_info-moved_multi",
                  required: true,
                  help_text: null,
                },
                answer: false,
              },
              showOn: true,
              questionObjects: [
                {
                  question: {
                    question_key: "personal_info-address_date",
                    category: "Personal Info",
                    question: "When did you move into your current address?",
                    type: "Date",
                    help_text:
                      "<h3> \nDo you have a new address? \n</h3> \n<p> \nYou may have moved address since your last tax return. Or this may be the first time that you file a tax return. But since you registered for your <em>Unique Taxpayer Reference (UTR)</em>, we need to provide HMRC your new address on your tax return. \n</p>",
                    parent_question: "personal_info-moved_multi",
                    required: true,
                    sub_text: null,
                    tax_year: "2023/2024",
                    validation: {
                      minDate: "2023-04-06",
                      title: "Please enter a date in the range of the last tax year",
                    },
                  },
                  answer: null,
                },
              ],
            },
          ],
        },
        answer: {
          "personal_info-moved_recently": false,
          "personal_info-address_date": null,
        },
      },
      {
        question: {
          question_key: "personal_info-telephone",
          category: "Personal Info",
          question: "What is your telephone number?",
          type: "Phone",
          sub_text: "HMRC require this information as part of your tax return.",
          submit: "personal_info-nino_utr",
          required: false,
          help_text: null,
        },
        answer: "+918917293473",
      },
      {
        question: {
          question_key: "personal_info-nino_utr",
          category: "Personal Info",
          question: "Please confirm your National Insurance number and UTR",
          type: "Multi Q",
          sub_text:
            "<strong>Your Unique Taxpayer Reference (UTR) is needed to submit your tax return.</strong> You do not need your National Insurance Number (NINO) to submit the tax return.",
          help_text:
            '<h3>\nNational Insurance number and UTR\n</h3>\n<h4>National Insurance Number</h4>\n<p>The National Insurance number is a unique reference number used when communicating with HMRC.</p>\n<p>Every National Insurance number is different. It\'s made up of letters and numbers, like this: QQ 12 34 56 A</p>\n<p>You can find your National Insurance number on a payslip, P60, or letter about tax, pension, and benefits. Alternatively, you can contact the government <a href="https://www.gov.uk/lost-national-insurance-number" target="_blank">here.</a>\n<h4>Unique Taxpayer Reference (UTR)</h4>\nA UTR is sent to you by HMRC when you register for Self Assessment. They are 10-digit codes that uniquely identify you. HMRC will use this when dealing with your tax.</p>\n<p>You can find your UTR <a href="https://www.gov.uk/find-lost-utr-number" target="_blank">here</a>.</p>',
          sub_questions: ["personal_info-nino", "personal_info-utr"],
          questionObjects: [
            {
              question: {
                question_key: "personal_info-nino",
                category: "Personal Info",
                question: "National Insurance number",
                type: "Free text",
                parent_question: "personal_info-nino_utr",
                placeholder: "JJ141274A",
                validation: {
                  regex:
                    "([A-Za-z]{2}[0-9]{6}[A-Za-z]?)|([0-9]{2}[A-Za-z][0-9]{5})|([A-Za-z]{2} [0-9]{6} [A-Za-z]?)",
                  title:
                    "National insurance numbers (NINO) should appear in the following combination of letters and numbers - two uppercase letters, six numbers, one letter. For example: QQ123456C. ",
                },
                required: false,
                sub_text: null,
                help_text: null,
              },
              answer: null,
            },
            {
              question: {
                question_key: "personal_info-utr",
                category: "Personal Info",
                question: "Unique Tax Reference number",
                type: "UTR",
                sub_text:
                  "If you have an HMRC letter nearby, you can find it as your 'Tax Reference' number there.",
                parent_question: "personal_info-nino_utr",
                placeholder: "1234567890",
                validation: {
                  regex: "^[0-9]{10}$",
                  title:
                    "The format is a unique set of 10 numbers allocated automatically by HMRC for both individuals and entities who have to submit a tax return.",
                },
                help_text: null,
              },
              answer: null,
            },
          ],
        },
        answer: {},
      },
    ],
    status: "Complete",
    categoryExtras: {
      name: "Personal Info",
      start: "personal_info-name_dob",
    },
    summary: {
      title: "Personal Info (SA100)",
      subtext:
        "Thanks for providing your personal info!\n        Below is a highlight of the key information:",
      data: [],
      children: [
        {
          title: "Your name and date of birth",
          subtext:
            "Hi Jayanta, nice to meet you! You told us that you are currently 30 and was so at the end of the 2023/2024 tax year.",
          data: [
            {
              label: "First name",
              value: "Jayanta",
            },
            {
              label: "Last name",
              value: "garu",
            },
            {
              label: "Date of Birth",
              value: "29/12/1993",
            },
          ],
        },
        {
          title: "Your address",
          subtext: "Correspondence Address",
          data: [
            {
              label: "Address line 1",
              value: "Balasore Baripada Road",
            },
            {
              label: "Address line 2",
              value: "Januganj",
            },
            {
              label: "City",
              value: "Remuna",
            },
            {
              label: "County or Council",
              value: "Odisha",
            },
            {
              label: "Postcode",
              value: "756001",
            },
            {
              label: "Country",
              value: "India",
            },
          ],
        },
      ],
    },
    progressBarLength: 7,
    progressBarIndex: 7,
  };

  // introduction

  // const JsonData = {
  //   questionFlow: [
  //     {
  //       question: {
  //         question_key: "intro-taxyearoptions",
  //         category: "Introduction",
  //         question: "Have any of these applied to you?",
  //         type: "Multiple Choice",
  //         sub_text:
  //           "These situations are likely to be rare. Consult the <em>help</em> icon to learn more.\n<p>You can select more than one answer.</p>",
  //         help_text:
  //           "<h3>Tax situations</h3>\n<h4>Had non-UK income</h4>\n<p>Foreign income can include:</p>\n<ul>\n<li>Wages if you work abroad</li>\n<li>Foreign investment income (for example, dividends and savings interest)</li>\n<li>Income from property owned overseas</li>\n<li>Income from pensions held overseas</li>\n</ul>\n<p>Note that gifts from immediate family are mostly considered non-taxable and reportable. Please make sure to check this with a specialist.</p>\n<h4>Resident of another country</h4>\n<p>If you are a resident of another country, you're likely asked to pay tax there as well. This causes additional work on the UK returns which we are still developing the technology for.</p>\n<p>If you're not sure if you're a resident overseas, please contact your local tax office to find out. Most commonly, if you spend more than <strong>183 days</strong> or more in a year in a certain place, you count as a resident. However, each country has its own legislation.</p>\n<h4>Partnership income</h4>\n<p>Partnership (LLPs) involve sharing profits between business partners. This income is taxed separately on the Self Assessment tax return.</p>\n<h4>Trust income</h4>\n<p>A trust is a way of managing assets (money, investments, land or buildings) for people. There are different types of trusts and they are taxed differently.</p>\n<h4>Overseas pension scheme</h4>\n<p>Contributions to an overseas pension scheme can incur additional charges, depending on the country and pension scheme.</p>\n<p>HMRC regularly updates a list of registered overseas pension schemes.</p>",
  //         submit: "intro-nondom",
  //         choices: [
  //           {
  //             key: "__income_overseas",
  //             name: "Income from overseas",
  //             icon: "currenciesother.svg",
  //           },
  //           {
  //             key: "__resident_other_country",
  //             name: "Resident of another country",
  //             icon: "americas.svg",
  //           },
  //           {
  //             key: "__trust_income",
  //             name: "Trust income",
  //             icon: "trust.svg",
  //           },
  //           {
  //             key: "__overseas_pension",
  //             name: "Overseas pension scheme",
  //             icon: "cloud-rain.svg",
  //           },
  //           {
  //             key: "__intro-taxyearoptions_skip",
  //             skip: true,
  //             name: "No",
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: [],
  //     },
  //     {
  //       question: {
  //         question_key: "intro-nondom",
  //         category: "Introduction",
  //         question: "Did you keep your foreign income overseas?",
  //         type: "Boolean",
  //         sub_text:
  //           "If you are a UK national then this is likely a 'No'. If you are looking to claim the remittance basis please select 'Yes'",
  //         help_text:
  //           "<h3>Remittance Basis</h3>\n<p>The remittance basis is an alternative tax treatment that’s available to individuals who are resident but not domiciled in the UK and have foreign income and gains. Remittance basis is not available if you are deemed domicile in the UK. You will be deemed domicile if you were born in the UK with UK domicile of origin and UK resident in 2022 to 2023 tax year, or you have been UK resident for at least 15 of the previous 20 tax years and UK resident in 2022 to 2023 tax year.</p>",
  //         submit: "intro-jobstatus",
  //         choices: [
  //           {
  //             key: "__intro-nondom_yes",
  //             skip: true,
  //             name: "Yes",
  //           },

  //           {
  //             key: "__intro-nondom_No",
  //             skip: true,
  //             name: "No",
  //           },
  //         ],
  //         display_rulesets: [
  //           {
  //             if_display_false: "intro-jobstatus",
  //             rules: [
  //               {
  //                 question_key: "intro-taxyearoptions",
  //                 operator: "contains",
  //                 value: "__income_overseas",
  //               },
  //               {
  //                 question_key: "intro-taxyearoptions",
  //                 operator: "contains",
  //                 value: "__overseas_pension",
  //               },
  //             ],
  //             type: "or",
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: ["__intro-nondom_yes"],
  //     },
  //     {
  //       question: {
  //         question_key: "intro-jobstatus",
  //         category: "Introduction",
  //         question: "Your job status in 2023/2024",
  //         type: "Multiple Choice",
  //         sub_text: "<p>You can select more than one.</p><br /><strong></strong>",
  //         help_text:
  //           "<h3>Job Status</h3>\n<p>Your job status determines which parts of the tax return will need to be completed.</p>\n<p>Select <strong>employed </strong>if you</p>\n<ul>\n<li>work for an employer who deducts tax through PAYE</li>\n<li>received income as a company director</li>\n<li>hold an office such as a chairperson, secretary or treasurer and received an income for that work</li>\n<li>work for one person through another company or partnership</li>\n</ul>\n<p>If you were the <strong>director of a ltd company,</strong> this is technically the same as employment.</p>\n<p>Select <strong>self-employed</strong> if you're working for yourself as a freelance or the owner of a business rather than for an employer.</p>\n<p>Select <strong>landlord</strong> if you have rental properties held in your personal name.</p>\n<p>If neither of the above options apply to you, select <strong>No employment</strong>.</p>",
  //         submit: "intro-income",
  //         choices: [
  //           {
  //             key: "__employed",
  //             name: "Employed",
  //             icon: "users.svg",
  //           },
  //           {
  //             key: "__self_employed",
  //             name: "Self-employed",
  //             icon: "user.svg",
  //           },
  //           {
  //             key: "__partnership",
  //             name: "Partnership",
  //             icon: "partnership.svg",
  //           },
  //           {
  //             key: "__director",
  //             name: "Director of Ltd Company",
  //             icon: "director.svg",
  //           },
  //           {
  //             key: "__landlord",
  //             name: "Landlord",
  //             icon: "landlord.svg",
  //           },
  //           {
  //             key: "__intro-jobstatus_skip",
  //             skip: true,
  //             name: "No employment",
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: [],
  //     },
  //     {
  //       question: {
  //         question_key: "intro-income",
  //         category: "Introduction",
  //         question: "Additional sources of income",
  //         type: "Multiple Choice",
  //         sub_text: "Include all that apply to you.",
  //         help_text:
  //           "<h3>Additional income</h3><br/><h4>Interest</h4>\n<p>Interest includes the returns on a savings account you may hold with a bank or building society.</p>\n<p>You may receive a tax statement from your bank or building society.</p>\n<h4>Dividends</h4>\n<p>A dividend is the share of a company's profits that is distributed to shareholders.</p>\n<p>You may receive a tax statement from your brokerage, but this can also be provided by funds. Funds collate the dividends from the companies they hold and then make payments to you once a year, twice a year, or quarterly.</p>\n<h4>Rental income</h4>\n<p>If you're a landlord, you may receive rental income for your UK properties. This might be related to residential lettings including renting out part of your own home or furnished holiday lettings.</p>\n<p>It makes everything easier if you've been keeping track of your turnover and expenses throughout the year!</p>\n<h4>Pension or state benefits</h4>\n<p>State benefits include allowances that the government may provide.</p>\n<p>There are several tax free benefits so we'll be asking you questions about this later, if this section applies to you.</p><h3>Crypto Activities</h3><h4>Mining</h4><ul><li>Taxable as trading or miscellaneous income depending on the activity's commercial nature.</li><li>Eligible for the £1,000 trading allowance, potentially exempting low amounts from reporting.</li></ul><h4>Staking</h4><ul><li>Rewards taxable as trading or miscellaneous income, similar to interest earnings.</li><li>In certain situations, may be treated as capital receipts.</li><li>Transferred ownership during staking considered a disposal for capital gains tax by HMRC.</li></ul><h4>Airdrops</h4><ul><li>Taxable if received in exchange for services.</li><li>The reason for receipt affects tax treatment.</li></ul>",
  //         submit: "intro-assets",
  //         choices: [
  //           {
  //             key: "__interest",
  //             name: "Interest",
  //             icon: "interest.svg",
  //           },
  //           {
  //             key: "__dividends",
  //             name: "Dividends",
  //             icon: "dividends.svg",
  //           },
  //           {
  //             key: "__rental_income",
  //             name: "Rental income",
  //             icon: "propertyincome.svg",
  //           },
  //           {
  //             key: "__pensions",
  //             name: "Pension",
  //             icon: "cloud-rain.svg",
  //           },
  //           {
  //             key: "__benefits",
  //             name: "State benefits",
  //             icon: "cloud-rain.svg",
  //           },
  //           {
  //             key: "__crypto_activities",
  //             name: "Crypto activities",
  //             icon: "cryptocurrency.svg",
  //           },
  //           {
  //             key: "__intro-income_skip",
  //             skip: true,
  //             name: "None",
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: [
  //         "__interest",

  //         "__dividends",

  //         "__pensions",

  //         "__rental_income",

  //         "__benefits",

  //         "__crypto_activities",
  //       ],
  //     },
  //     {
  //       question: {
  //         question_key: "intro-assets",
  //         category: "Introduction",
  //         question: "Have you sold any assets?",
  //         type: "Multiple Choice",
  //         sub_text: "Select the asset that you sold below.",
  //         help_text:
  //           '<h3>Capital gains</h3>\n<p><a rel="noopener" href="https://www.taxd.co.uk/post/capital-gains-101" target="_blank">Capital Gains Tax</a> is a tax on the profit when you sell (or dispose of) something (an asset) that\'s increased in value. It\'s the gain you make that\'s taxed, not the total amount of money you receive.</p>\n<p>In the UK, each resident is entitled up to <strong>£12,300</strong> of gains tax free for the year. If your gain was above this, you\'ll need to report this during your Self Assessment.</p>\n<p>If your gain was less than £12,300. feel free to skip this question or select n<strong>o sales</strong>.</p>\n<p>If you made a loss, you still have the option to select the relevant option. Our software remembers this and can offset against gains you might make in the future.</p>\n<p>Disposal of an asset includes:</p>\n<ul>\n<li>Selling it</li>\n<li>Giving it away as a gift or transferring it to someone else</li>\n<li>Swapping it for something else</li>\n<li>Getting compensation for it (like an insurance pay-out if the asset was lost or destroyed)</li>\n</ul>',
  //         choices: [
  //           {
  //             key: "__property_land",
  //             name: "Property and land",
  //             icon: "propertyandland.svg",
  //           },
  //           {
  //             key: "__unlisted_shares",
  //             name: "Unlisted Shares",
  //             icon: "shares.svg",
  //           },
  //           {
  //             key: "__listed_shares",
  //             name: "Listed Shares",
  //             icon: "shares.svg",
  //           },
  //           {
  //             key: "__crypto",
  //             name: "Cryptocurrency",
  //             icon: "cryptocurrency.svg",
  //           },
  //           {
  //             key: "__personalbusiness",
  //             name: "Business asset",
  //             icon: "contract.svg",
  //           },
  //           {
  //             key: "__other",
  //             name: "Other assets",
  //             icon: "contract.svg",
  //           },
  //           {
  //             key: "__emi",
  //             name: "EMI/BADR",
  //             icon: "contract.svg",
  //           },
  //           {
  //             key: "__intro-assets_skip",
  //             skip: true,
  //             name: "No",
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: ["__personalbusiness"],
  //     },
  //   ],
  //   status: "Complete",
  //   categoryExtras: {
  //     name: "Introduction",
  //     start: "intro-taxyear",
  //   },
  //   summary: {
  //     title: "Introduction",
  //     subtext:
  //       "The introduction questions helped us select questions for you to answer and submit a thorough tax return. Here's what you told us:",

  //     data: [
  //       {
  //         value:
  //           "You were <strong>Employed, Self-employed, Partnership, a Director of Ltd Company and a Landlord</strong>.",
  //       },

  //       {
  //         value:
  //           "You received <strong>interest, dividends, rental income, pension, state benefits and crypto activities</strong>.",
  //       },

  //       {
  //         value: "You sold <strong>business asset</strong>.",
  //       },
  //     ],
  //   },
  //   progressBarLength: 9,
  //   progressBarIndex: 9,
  // };

  // Residance;

  // const JsonData = {
  //   questionFlow: [
  //     {
  //       question: {
  //         question_key: "residence-nonres_tests",
  //         category: "Residence",
  //         question: "Automatic non-resident tests",
  //         type: "Multi Toggle",
  //         sub_text: "We’re going to ask you questions to help determine your tax residence.",
  //         submit: "residence-res_tests",
  //         if_true: "residence-days_multi",
  //         sub_questions: ["residence-nonres_46", "residence-nonres_16", "residence-nonres_fto"],
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-nonres_46",
  //               category: "Residence",
  //               question:
  //                 "You were a <strong>non-UK resident throughout the whole of the previous three tax years</strong> and present in UK for <strong>less than</strong> 46 days in the 2023/2024 tax year.",
  //               type: "Toggle",
  //               parent_question: "residence-nonres_tests",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-nonres_16",
  //               category: "Residence",
  //               question:
  //                 "You were a <strong>resident in UK in at least one of the previous three tax years</strong> and present in UK <strong>less than</strong> 16 days in the 2023/2024 tax year.",
  //               type: "Toggle",
  //               parent_question: "residence-nonres_tests",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-nonres_fto",
  //               category: "Residence",
  //               question:
  //                 "You are working full time overseas and were present in UK for <strong>less than</strong> 91 days and spent <strong>less than</strong> 31 days working in UK.",
  //               type: "Toggle",
  //               help_text:
  //                 "<h3>Automatic Non Residence Test - Overseas Work</h3><p>To be a non-UK resident for the tax year while working full-time overseas, consider these conditions:</p><ol><li><p>Spend fewer than 91 days in the UK in the tax year.</p></li><li><p>Work for more than 3 hours in the UK on less than 31 days.</p></li><li><p>Avoid significant breaks in your overseas work.</p></li></ol><p>A significant break means at least 31 days pass, and none of those days involve:</p><ul><li>Working for more than 3 hours overseas</li><li>Would-be overseas work (more than 3 hours) but did not happen due to leave (annual, sick, or parenting)</li></ul><p>Important to note:</p><ul><li>A significant break disqualifies you from full-time work overseas.</li><li>This test applies to both employees and the self-employed.</li><li>It does not apply to voluntary workers or those with jobs on vehicles, aircraft, or ships.</li></ul>",
  //               parent_question: "residence-nonres_tests",
  //               required: true,
  //               sub_text: null,
  //             },
  //             answer: false,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-nonres_46": false,
  //         "residence-nonres_16": false,
  //         "residence-nonres_fto": false,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-res_tests",
  //         category: "Residence",
  //         question: "Automatic resident tests",
  //         type: "Multi Q",
  //         submit: "residence-res_threeyears",
  //         sub_questions: ["residence-res_183", "residence-res_homes", "residence-res_75"],
  //         required: true,
  //         sub_text: null,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-res_183",
  //               category: "Residence",
  //               question: "Were you present in the UK 183 days or more in the 2023/2024 tax year?",
  //               type: "Toggle",
  //               parent_question: "residence-res_tests",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-res_homes",
  //               category: "Residence",
  //               question:
  //                 "Was your accessible home only in the UK and did you spend more than 30 days in this home?",
  //               type: "Toggle",
  //               sub_text:
  //                 "This means that you have a home in the UK that is available for you to stay at. For example, you may have 2 bedrooms and rent 1 room while you're away.",
  //               help_text:
  //                 "<h3>Automatic Residence Test - Accomodation</h3><h3>You will be a UK resident for the tax year if you have, or have had, a home in the UK for all or part of the year, and the following conditions apply:</h3><ol><li>You had a home in the UK for at least one period of 91 consecutive days.</li><li>At least 30 of those 91 days fall within the tax year when you have a home in the UK, and you&#39;ve been present in that home for at least 30 days at any time during the year.</li><li>At that time, you had no overseas home, or if you had an overseas home, you were present in it for fewer than 30 days in the tax year.</li></ol><p>If you have more than one home in the UK, consider each separately to see if you meet the test, and meeting it for one of your UK homes is sufficient.</p>",
  //               parent_question: "residence-res_tests",
  //               required: true,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-res_75",
  //               category: "Residence",
  //               question:
  //                 "Were more than 75% of your workdays in the UK? A workday is 3 hours or more.",
  //               type: "Toggle",
  //               help_text:
  //                 "<h3>Automatic Residence Test - Workdays</h3><p>You will be a UK resident for the tax year if the following conditions are met:</p><ol><li>You work full-time in the UK for any 365-day period within the tax year.</li><li>More than 75% of the days in that 365-day period, when you work for more than 3 hours, occur in the UK.</li><li>At least one day, which must fall within both the 365-day period and the tax year, involves you working for more than 3 hours in the UK.</li></ol>",
  //               parent_question: "residence-res_tests",
  //               required: true,
  //               sub_text: null,
  //             },
  //             answer: false,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-res_183": false,
  //         "residence-res_homes": false,
  //         "residence-res_75": false,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-res_threeyears",
  //         category: "Residence",
  //         question: "Were you a UK resident in any of the previous three tax years?",
  //         sub_text: "For reference, we're currently looking at the 2023/2024.",
  //         type: "Boolean",
  //         submit: "residence-ties",
  //         required: true,
  //         help_text: null,
  //       },
  //       answer: true,
  //     },
  //     {
  //       question: {
  //         question_key: "residence-ties",
  //         category: "Residence",
  //         question: "Ties to the UK",
  //         type: "Multi Q",
  //         sub_text:
  //           "We'll work out your UK residence position for 2023/2024, by reviewing your ties to the UK in combination with the number of days you spend in the UK.",
  //         help_text:
  //           '<h3>UK Sufficient Ties Test</h3><p>To determine your UK residence status for the tax year when you don&#39;t meet any of the automatic overseas or UK tests, you&#39;ll need to apply the Sufficient Ties Test. This involves evaluating your connections to the UK, referred to as &quot;ties,&quot; in combination with the number of days you spend in the UK during that tax year.</p><p>If you were not a UK resident in any of the 3 tax years before the one you&#39;re considering, check if you have any of the following ties:</p><ul><li>A family tie</li><li>An accommodation tie</li><li>A work tie</li><li>A 90-day tie</li></ul><p>If you were a UK resident in one or more of the 3 tax years before the one you&#39;re considering, you&#39;ll also need to assess whether you have a country tie.</p><p>Keep in mind that the more UK ties you have, the fewer days you can spend in the UK before becoming a UK resident.</p><p>Full details can be found by <a href="https://cdn.taxd.co.uk/UK_Residence_Tests_d1b384aca6.pdf">clicking here</a>.</p>',
  //         submit: "residence-days_multi",
  //         sub_questions: [
  //           "residence-ties_family",
  //           "residence-ties_40days",
  //           "residence-ties_ukhome",
  //           "residence-ties_90daysprev",
  //           "residence-ties_countrysplit",
  //         ],
  //         required: true,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-ties_family",
  //               category: "Residence",
  //               question: "Do you have immediate family members who are resident in the UK?",
  //               type: "Toggle",
  //               sub_text: "A person's immediate family is their husband/wife and children.",
  //               help_text:
  //                 "<h3>Family Ties</h3><ul><li>Husband, wife, or civil partner (unless they are separated).</li><li>Partner, provided they are living together as if married or as civil partners.</li><li>Child, if the child is under 18 years old.</li></ul><p>However, a family tie with a child under 18 does not exist if the individual spends less than a total of 61 days in the UK with that child during the tax year. If the child turns 18 during the tax year, the individual will not have a family tie concerning that child if they have seen the child on fewer than 61 days in the UK before the child&#39;s birthday.</p><p>Partners can meet this test by living together either in the UK, overseas, or both. Separation is defined as either being under a court order, deed of separation, or in circumstances indicating a likely permanent separation.</p>",
  //               parent_question: "residence-ties",
  //               required: true,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-ties_40days",
  //               category: "Residence",
  //               question: "Did you work for more than 40 days in the UK?",
  //               type: "Toggle",
  //               parent_question: "residence-ties",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-ties_ukhome",
  //               category: "Residence",
  //               question: "Do you have accessible accommodation in the UK?",
  //               type: "Toggle",
  //               sub_text:
  //                 "This means that you have a home in the UK that is available for you to stay at. For example, you may have 2 bedrooms and rent 1 room while you're away.",
  //               help_text:
  //                 "<h3>Accommodation Tie</h3><ul><li>You need the accommodation available for at least 91 continuous days in the tax year.</li><li>You must stay there for at least 1 night during the tax year.</li></ul><p>For example, consider Peter, who left the UK to travel. He doesn't have a UK home but can stay with his cousin for extended periods when visiting. Even without a permanent home, Peter has an accommodation tie.</p><p>The key difference between \"home\" for SRT purposes and available accommodation is that the latter can be temporary and doesn't require the same stability or permanence. So, if you lack a UK home, having a place to stay in the UK can still create an accommodation tie.</p>",
  //               parent_question: "residence-ties",
  //               required: true,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-ties_90daysprev",
  //               category: "Residence",
  //               question:
  //                 "Were you in the UK for more than 90 days in either of the previous two tax years?",
  //               type: "Toggle",
  //               parent_question: "residence-ties",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-ties_countrysplit",
  //               category: "Residence",
  //               question:
  //                 "Were you in the UK for more days than another country during the 2023/2024 tax year?",
  //               type: "Toggle",
  //               parent_question: "residence-ties",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: false,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-ties_family": false,
  //         "residence-ties_40days": false,
  //         "residence-ties_ukhome": false,
  //         "residence-ties_90daysprev": false,
  //         "residence-ties_countrysplit": false,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-days_multi",
  //         category: "Residence",
  //         question: "Days in the UK",
  //         type: "Multi Q",
  //         help_text:
  //           "<h3>UK Sufficient Ties Test</h3><p>To determine your UK residence status for the tax year when you don’t meet any of the automatic overseas or UK tests, you’ll need to apply the Sufficient Ties Test. This involves evaluating your connections to the UK, referred to as “ties,” in combination with the number of days you spend in the UK during that tax year.</p><p>If you were not a UK resident in any of the 3 tax years before the one you’re considering, check if you have any of the following ties:</p><ul><li>A family tie</li><li>An accommodation tie</li><li>A work tie</li><li>A 90-day tie</li></ul><p>If you were a UK resident in one or more of the 3 tax years before the one you’re considering, you’ll also need to assess whether you have a country tie.</p><p>Keep in mind that the more UK ties you have, the fewer days you can spend in the UK before becoming a UK resident.</p><p>Full details can be found by <a href=“https://cdn.taxd.co.uk/UK_Residence_Tests_d1b384aca6.pdf”>clicking here</a>.</p>",
  //         submit: "residence-country_multi",
  //         sub_questions: ["residence-days", "residence-workdays", "residence-exceptionaldays"],
  //         required: true,
  //         sub_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-days",
  //               category: "Residence",
  //               question: "How many days did you spend in the UK during the 2023/2024 tax year?",
  //               type: "Numeric",
  //               parent_question: "residence-days_multi",
  //               required: true,
  //               validation: {
  //                 max: 366,
  //               },
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: 235,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-workdays",
  //               category: "Residence",
  //               question: "How many of these days were spent working?",
  //               type: "Numeric",
  //               sub_text:
  //                 "A day is classed as a workday if you <strong>work for 3 hours or more</strong> on a given day.",
  //               parent_question: "residence-days_multi",
  //               validation: {
  //                 max: 366,
  //               },
  //               help_text: null,
  //             },
  //             answer: 180,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-exceptionaldays",
  //               category: "Residence",
  //               question: "How many of these days were due to exceptional circumstances?",
  //               type: "Numeric",
  //               sub_text:
  //                 "You can mark this as 0, if no days were due to exceptional circumstances.",
  //               help_text:
  //                 "<h3>Exceptional Circumstances</h3>\n<p>In the context of UK tax residency, \"exceptional circumstances\" refers to situations beyond an individual's control that prevent them from leaving the UK, despite their intention to do so. These circumstances can include:</p>\n<ul>\n<li>Serious illness or injury affecting the individual or a close family member</li>\n<li>Natural disasters or political unrest in the individual's home country</li>\n<li>Travel disruptions, such as flight cancellations or border closures</li>\n</ul>\n<p>If an individual is unable to leave the UK due to exceptional circumstances, the days they spend in the UK may not be counted towards the 183-day limit for tax residency purposes.</p>",
  //               parent_question: "residence-days_multi",
  //               validation: {
  //                 min: 0,
  //                 max: 60,
  //               },
  //             },
  //             answer: 23,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-days": 235,
  //         "residence-workdays": 180,
  //         "residence-exceptionaldays": 23,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-country_multi",
  //         category: "Residence",
  //         question: "Based on what you told us, you are a UK tax resident",
  //         sub_text: "Please provide your nationality below.",
  //         type: "Multi Q",
  //         help_text:
  //           "If you are a dual national and one is british - use this. If you are dual national and one is european then use this (provided you don't hold a UK passport).",
  //         submit: "residence-secondres_multi",
  //         sub_questions: ["residence-country_national", "residence-prev_uk"],
  //         required: true,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-country_national",
  //               category: "Residence",
  //               question: "What is your nationality?",
  //               type: "Country List",
  //               help_text:
  //                 "<h3>Nationality</h3><p><span>If you are a dual national and one is british - use this. If you are dual national and one is european then use this (provided you don't hold a UK passport). </span></p>",
  //               choices: [
  //                 {
  //                   name: "United Kingdom",
  //                   key: "GBR",
  //                 },
  //                 {
  //                   name: "Afghanistan",
  //                   key: "AFG",
  //                 },
  //                 {
  //                   name: "Albania",
  //                   key: "ALB",
  //                 },
  //                 {
  //                   name: "Algeria",
  //                   key: "DZA",
  //                 },
  //                 {
  //                   name: "American Samoa",
  //                   key: "ASM",
  //                 },
  //                 {
  //                   name: "Andorra",
  //                   key: "AND",
  //                 },
  //                 {
  //                   name: "Angola",
  //                   key: "AGO",
  //                 },
  //                 {
  //                   name: "Anguilla",
  //                   key: "AIA",
  //                 },
  //                 {
  //                   name: "Antigua and Barbuda",
  //                   key: "ATG",
  //                 },
  //                 {
  //                   name: "Argentina",
  //                   key: "ARG",
  //                 },
  //                 {
  //                   name: "Armenia",
  //                   key: "ARM",
  //                 },
  //                 {
  //                   name: "Aruba",
  //                   key: "ABW",
  //                 },
  //                 {
  //                   name: "Australia",
  //                   key: "AUS",
  //                 },
  //                 {
  //                   name: "Austria",
  //                   key: "AUT",
  //                 },
  //                 {
  //                   name: "Azerbaijan",
  //                   key: "AZE",
  //                 },
  //                 {
  //                   name: "Bahamas",
  //                   key: "BHS",
  //                 },
  //                 {
  //                   name: "Bahrain",
  //                   key: "BHR",
  //                 },
  //                 {
  //                   name: "Bangladesh",
  //                   key: "BGD",
  //                 },
  //                 {
  //                   name: "Barbados",
  //                   key: "BRB",
  //                 },
  //                 {
  //                   name: "Belarus",
  //                   key: "BLR",
  //                 },
  //                 {
  //                   name: "Belgium",
  //                   key: "BEL",
  //                 },
  //                 {
  //                   name: "Belize",
  //                   key: "BLZ",
  //                 },
  //                 {
  //                   name: "Benin",
  //                   key: "BEN",
  //                 },
  //                 {
  //                   name: "Bermuda",
  //                   key: "BMU",
  //                 },
  //                 {
  //                   name: "Bhutan",
  //                   key: "BTN",
  //                 },
  //                 {
  //                   name: "Bolivia",
  //                   key: "BOL",
  //                 },
  //                 {
  //                   name: "Bonaire",
  //                   key: "BES",
  //                 },
  //                 {
  //                   name: "Bosnia and Herzegovina",
  //                   key: "BIH",
  //                 },
  //                 {
  //                   name: "Botswana",
  //                   key: "BWA",
  //                 },
  //                 {
  //                   name: "Brazil",
  //                   key: "BRA",
  //                 },
  //                 {
  //                   name: "British Virgin Islands",
  //                   key: "VGB",
  //                 },
  //                 {
  //                   name: "Brunei Darussalam",
  //                   key: "BRN",
  //                 },
  //                 {
  //                   name: "Bulgaria",
  //                   key: "BGR",
  //                 },
  //                 {
  //                   name: "Burkino Faso",
  //                   key: "BFA",
  //                 },
  //                 {
  //                   name: "Burma (also known as Myanmar)",
  //                   key: "MMR",
  //                 },
  //                 {
  //                   name: "Burundi",
  //                   key: "BDI",
  //                 },
  //                 {
  //                   name: "Saint Barthélemy",
  //                   key: "BLM",
  //                 },
  //                 {
  //                   name: "Cambodia",
  //                   key: "KHM",
  //                 },
  //                 {
  //                   name: "Cameroon",
  //                   key: "CMR",
  //                 },
  //                 {
  //                   name: "Canada",
  //                   key: "CAN",
  //                 },
  //                 {
  //                   name: "Cape Verde",
  //                   key: "CPV",
  //                 },
  //                 {
  //                   name: "Cayman Islands",
  //                   key: "CYM",
  //                 },
  //                 {
  //                   name: "Central African Republic",
  //                   key: "CAF",
  //                 },
  //                 {
  //                   name: "Chad",
  //                   key: "TCD",
  //                 },
  //                 {
  //                   name: "Chile",
  //                   key: "CHL",
  //                 },
  //                 {
  //                   name: "China",
  //                   key: "CHN",
  //                 },
  //                 {
  //                   name: "Christmas Island",
  //                   key: "CXR",
  //                 },
  //                 {
  //                   name: "Cocos (Keeling) Islands",
  //                   key: "CCK",
  //                 },
  //                 {
  //                   name: "Colombia",
  //                   key: "COL",
  //                 },
  //                 {
  //                   name: "Comoros",
  //                   key: "COM",
  //                 },
  //                 {
  //                   name: "Congo",
  //                   key: "COG",
  //                 },
  //                 {
  //                   name: "Cook Islands",
  //                   key: "COK",
  //                 },
  //                 {
  //                   name: "Costa Rica",
  //                   key: "CRI",
  //                 },
  //                 {
  //                   name: "Côte d’Ivoire",
  //                   key: "CIV",
  //                 },
  //                 {
  //                   name: "Croatia",
  //                   key: "HRV",
  //                 },
  //                 {
  //                   name: "Cuba",
  //                   key: "CUB",
  //                 },
  //                 {
  //                   name: "Curaçao",
  //                   key: "CUW",
  //                 },
  //                 {
  //                   name: "Cyprus",
  //                   key: "CYP",
  //                 },
  //                 {
  //                   name: "Czech Republic",
  //                   key: "CZE",
  //                 },
  //                 {
  //                   name: "Democratic Republic of the Congo(formerly Zaire)",
  //                   key: "COD",
  //                 },
  //                 {
  //                   name: "Denmark",
  //                   key: "DNK",
  //                 },
  //                 {
  //                   name: "Djibouti",
  //                   key: "DJI",
  //                 },
  //                 {
  //                   name: "Dominica",
  //                   key: "DMA",
  //                 },
  //                 {
  //                   name: "Dominican Republic",
  //                   key: "DOM",
  //                 },
  //                 {
  //                   name: "Ecuador",
  //                   key: "ECU",
  //                 },
  //                 {
  //                   name: "Egypt",
  //                   key: "EGY",
  //                 },
  //                 {
  //                   name: "El Salvador",
  //                   key: "SLV",
  //                 },
  //                 {
  //                   name: "Equatorial Guinea",
  //                   key: "GNQ",
  //                 },
  //                 {
  //                   name: "Eritrea",
  //                   key: "ERI",
  //                 },
  //                 {
  //                   name: "Estonia",
  //                   key: "EST",
  //                 },
  //                 {
  //                   name: "Ethiopia",
  //                   key: "ETH",
  //                 },
  //                 {
  //                   name: "Falkland Islands",
  //                   key: "FLK",
  //                 },
  //                 {
  //                   name: "Faroe Islands",
  //                   key: "FRO",
  //                 },
  //                 {
  //                   name: "Fiji",
  //                   key: "FJI",
  //                 },
  //                 {
  //                   name: "Finland",
  //                   key: "FIN",
  //                 },
  //                 {
  //                   name: "France",
  //                   key: "FRA",
  //                 },
  //                 {
  //                   name: "French Guiana",
  //                   key: "GUF",
  //                 },
  //                 {
  //                   name: "French Polynesia",
  //                   key: "PYF",
  //                 },
  //                 {
  //                   name: "Gabon",
  //                   key: "GAB",
  //                 },
  //                 {
  //                   name: "Gambia",
  //                   key: "GMB",
  //                 },
  //                 {
  //                   name: "Georgia",
  //                   key: "GEO",
  //                 },
  //                 {
  //                   name: "Germany",
  //                   key: "DEU",
  //                 },
  //                 {
  //                   name: "Ghana",
  //                   key: "GHA",
  //                 },
  //                 {
  //                   name: "Gibraltar",
  //                   key: "GIB",
  //                 },
  //                 {
  //                   name: "Greece",
  //                   key: "GRC",
  //                 },
  //                 {
  //                   name: "Greenland",
  //                   key: "GRL",
  //                 },
  //                 {
  //                   name: "Grenada",
  //                   key: "GRD",
  //                 },
  //                 {
  //                   name: "Guadeloupe",
  //                   key: "GLP",
  //                 },
  //                 {
  //                   name: "Guam",
  //                   key: "GUM",
  //                 },
  //                 {
  //                   name: "Guatemala",
  //                   key: "GTM",
  //                 },
  //                 {
  //                   name: "Guernsey",
  //                   key: "GGY",
  //                 },
  //                 {
  //                   name: "Guinea",
  //                   key: "GIN",
  //                 },
  //                 {
  //                   name: "Guinea-Bissau",
  //                   key: "GNB",
  //                 },
  //                 {
  //                   name: "Guyana",
  //                   key: "GUY",
  //                 },
  //                 {
  //                   name: "Haiti",
  //                   key: "HTI",
  //                 },
  //                 {
  //                   name: "Honduras",
  //                   key: "HND",
  //                 },
  //                 {
  //                   name: "Hong Kong (SAR)",
  //                   key: "HKG",
  //                 },
  //                 {
  //                   name: "Hungary",
  //                   key: "HUN",
  //                 },
  //                 {
  //                   name: "Iceland",
  //                   key: "ISL",
  //                 },
  //                 {
  //                   name: "India",
  //                   key: "IND",
  //                 },
  //                 {
  //                   name: "Indonesia",
  //                   key: "IDN",
  //                 },
  //                 {
  //                   name: "Iran",
  //                   key: "IRN",
  //                 },
  //                 {
  //                   name: "Iraq",
  //                   key: "IRQ",
  //                 },
  //                 {
  //                   name: "Ireland (Republic of)",
  //                   key: "IRL",
  //                 },
  //                 {
  //                   name: "Isle of Man",
  //                   key: "IMN",
  //                 },
  //                 {
  //                   name: "Israel",
  //                   key: "ISR",
  //                 },
  //                 {
  //                   name: "Italy",
  //                   key: "ITA",
  //                 },
  //                 {
  //                   name: "Jamaica",
  //                   key: "JAM",
  //                 },
  //                 {
  //                   name: "Japan",
  //                   key: "JPN",
  //                 },
  //                 {
  //                   name: "Jersey",
  //                   key: "JEY",
  //                 },
  //                 {
  //                   name: "Jordan",
  //                   key: "JOR",
  //                 },
  //                 {
  //                   name: "Kazakhstan",
  //                   key: "KAZ",
  //                 },
  //                 {
  //                   name: "Kenya",
  //                   key: "KEN",
  //                 },
  //                 {
  //                   name: "Kiribati",
  //                   key: "KIR",
  //                 },
  //                 {
  //                   name: "Kosovo",
  //                   key: "XKX",
  //                 },
  //                 {
  //                   name: "Kuwait",
  //                   key: "KWT",
  //                 },
  //                 {
  //                   name: "Kyrgyzstan",
  //                   key: "KGZ",
  //                 },
  //                 {
  //                   name: "Laos",
  //                   key: "LAO",
  //                 },
  //                 {
  //                   name: "Latvia",
  //                   key: "LVA",
  //                 },
  //                 {
  //                   name: "Lebanon",
  //                   key: "LBN",
  //                 },
  //                 {
  //                   name: "Lesotho",
  //                   key: "LSO",
  //                 },
  //                 {
  //                   name: "Liberia",
  //                   key: "LBR",
  //                 },
  //                 {
  //                   name: "Libya",
  //                   key: "LBY",
  //                 },
  //                 {
  //                   name: "Liechtenstein",
  //                   key: "LIE",
  //                 },
  //                 {
  //                   name: "Lithuania",
  //                   key: "LTU",
  //                 },
  //                 {
  //                   name: "Luxembourg",
  //                   key: "LUX",
  //                 },
  //                 {
  //                   name: "Macao (SAR)",
  //                   key: "MAC",
  //                 },
  //                 {
  //                   name: "Macedonia (FYR)",
  //                   key: "MKD",
  //                 },
  //                 {
  //                   name: "Madagascar",
  //                   key: "MDG",
  //                 },
  //                 {
  //                   name: "Malawi",
  //                   key: "MWI",
  //                 },
  //                 {
  //                   name: "Malaysia",
  //                   key: "MYS",
  //                 },
  //                 {
  //                   name: "Maldives",
  //                   key: "MDV",
  //                 },
  //                 {
  //                   name: "Mali",
  //                   key: "MLI",
  //                 },
  //                 {
  //                   name: "Malta",
  //                   key: "MLT",
  //                 },
  //                 {
  //                   name: "Marshall Islands",
  //                   key: "MHL",
  //                 },
  //                 {
  //                   name: "Martinique",
  //                   key: "MTQ",
  //                 },
  //                 {
  //                   name: "Mauritania",
  //                   key: "MRT",
  //                 },
  //                 {
  //                   name: "Mauritius",
  //                   key: "MUS",
  //                 },
  //                 {
  //                   name: "Mayotte",
  //                   key: "MYT",
  //                 },
  //                 {
  //                   name: "Mexico",
  //                   key: "MEX",
  //                 },
  //                 {
  //                   name: "Micronesia",
  //                   key: "FSM",
  //                 },
  //                 {
  //                   name: "Moldova",
  //                   key: "MDA",
  //                 },
  //                 {
  //                   name: "Monaco",
  //                   key: "MCO",
  //                 },
  //                 {
  //                   name: "Mongolia",
  //                   key: "MNG",
  //                 },
  //                 {
  //                   name: "Montenegro",
  //                   key: "MNE",
  //                 },
  //                 {
  //                   name: "Montserrat",
  //                   key: "MSR",
  //                 },
  //                 {
  //                   name: "Morocco",
  //                   key: "MAR",
  //                 },
  //                 {
  //                   name: "Mozambique",
  //                   key: "MOZ",
  //                 },
  //                 {
  //                   name: "Namibia",
  //                   key: "NAM",
  //                 },
  //                 {
  //                   name: "Nauru",
  //                   key: "NRU",
  //                 },
  //                 {
  //                   name: "Nepal",
  //                   key: "NPL",
  //                 },
  //                 {
  //                   name: "Netherlands",
  //                   key: "NLD",
  //                 },
  //                 {
  //                   name: "New Caledonia",
  //                   key: "NCL",
  //                 },
  //                 {
  //                   name: "New Zealand",
  //                   key: "NZL",
  //                 },
  //                 {
  //                   name: "Nicaragua",
  //                   key: "NIC",
  //                 },
  //                 {
  //                   name: "Niger",
  //                   key: "NER",
  //                 },
  //                 {
  //                   name: "Nigeria",
  //                   key: "NGA",
  //                 },
  //                 {
  //                   name: "Niue",
  //                   key: "NIU",
  //                 },
  //                 {
  //                   name: "Norfolk Island",
  //                   key: "NFK",
  //                 },
  //                 {
  //                   name: "North Korea",
  //                   key: "PRK",
  //                 },
  //                 {
  //                   name: "Northern Mariana Islands",
  //                   key: "MNP",
  //                 },
  //                 {
  //                   name: "Norway",
  //                   key: "NOR",
  //                 },
  //                 {
  //                   name: "Oman",
  //                   key: "OMN",
  //                 },
  //                 {
  //                   name: "Pakistan",
  //                   key: "PAK",
  //                 },
  //                 {
  //                   name: "Palau",
  //                   key: "PLW",
  //                 },
  //                 {
  //                   name: "Panama",
  //                   key: "PAN",
  //                 },
  //                 {
  //                   name: "Papua New Guinea",
  //                   key: "PNG",
  //                 },
  //                 {
  //                   name: "Paraguay",
  //                   key: "PRY",
  //                 },
  //                 {
  //                   name: "Peru",
  //                   key: "PER",
  //                 },
  //                 {
  //                   name: "Philippines",
  //                   key: "PHL",
  //                 },
  //                 {
  //                   name: "Pitcairn Island",
  //                   key: "PCN",
  //                 },
  //                 {
  //                   name: "Poland",
  //                   key: "POL",
  //                 },
  //                 {
  //                   name: "Portugal",
  //                   key: "PRT",
  //                 },
  //                 {
  //                   name: "Puerto Rico",
  //                   key: "PRI",
  //                 },
  //                 {
  //                   name: "Qatar",
  //                   key: "QAT",
  //                 },
  //                 {
  //                   name: "Reunion",
  //                   key: "REU",
  //                 },
  //                 {
  //                   name: "Romania",
  //                   key: "ROU",
  //                 },
  //                 {
  //                   name: "Russian Federation",
  //                   key: "RUS",
  //                 },
  //                 {
  //                   name: "Rwanda",
  //                   key: "RWA",
  //                 },
  //                 {
  //                   name: "St Helena and Dependencies",
  //                   key: "SHN",
  //                 },
  //                 {
  //                   name: "St Kitts and Nevis",
  //                   key: "KNA",
  //                 },
  //                 {
  //                   name: "St Lucia",
  //                   key: "LCA",
  //                 },
  //                 {
  //                   name: "St Pierre and Miquelon",
  //                   key: "SPM",
  //                 },
  //                 {
  //                   name: "St Vincent and the Grenadines",
  //                   key: "VCT",
  //                 },
  //                 {
  //                   name: "Saba",
  //                   key: "BES",
  //                 },
  //                 {
  //                   name: "Samoa",
  //                   key: "WSM",
  //                 },
  //                 {
  //                   name: "San Marino",
  //                   key: "SMR",
  //                 },
  //                 {
  //                   name: "Sao Tome and Principe",
  //                   key: "STP",
  //                 },
  //                 {
  //                   name: "Saudi Arabia",
  //                   key: "SAU",
  //                 },
  //                 {
  //                   name: "Senegal",
  //                   key: "SEN",
  //                 },
  //                 {
  //                   name: "Serbia and Montenegro",
  //                   key: "SRB",
  //                 },
  //                 {
  //                   name: "Seychelles",
  //                   key: "SYC",
  //                 },
  //                 {
  //                   name: "Sierra Leone",
  //                   key: "SLE",
  //                 },
  //                 {
  //                   name: "Singapore",
  //                   key: "SGP",
  //                 },
  //                 {
  //                   name: "Sint Eustatius",
  //                   key: "BES",
  //                 },
  //                 {
  //                   name: "Sint Maarten (Dutch part)",
  //                   key: "SXM",
  //                 },
  //                 {
  //                   name: "Slovak Republic",
  //                   key: "SVK",
  //                 },
  //                 {
  //                   name: "Slovenia",
  //                   key: "SVN",
  //                 },
  //                 {
  //                   name: "Solomon Islands",
  //                   key: "SLB",
  //                 },
  //                 {
  //                   name: "Somalia",
  //                   key: "SOM",
  //                 },
  //                 {
  //                   name: "South Africa",
  //                   key: "ZAF",
  //                 },
  //                 {
  //                   name: "South Korea",
  //                   key: "KOR",
  //                 },
  //                 {
  //                   name: "South Sudan",
  //                   key: "SSD",
  //                 },
  //                 {
  //                   name: "Spain",
  //                   key: "ESP",
  //                 },
  //                 {
  //                   name: "Sri Lanka",
  //                   key: "LKA",
  //                 },
  //                 {
  //                   name: "Sudan",
  //                   key: "SDN",
  //                 },
  //                 {
  //                   name: "Suriname",
  //                   key: "SUR",
  //                 },
  //                 {
  //                   name: "Svalbard and Jan Mayen Islands",
  //                   key: "SJM",
  //                 },
  //                 {
  //                   name: "Swaziland",
  //                   key: "SWZ",
  //                 },
  //                 {
  //                   name: "Sweden",
  //                   key: "SWE",
  //                 },
  //                 {
  //                   name: "Switzerland",
  //                   key: "CHE",
  //                 },
  //                 {
  //                   name: "Syria",
  //                   key: "SYR",
  //                 },
  //                 {
  //                   name: "Taiwan",
  //                   key: "TWN",
  //                 },
  //                 {
  //                   name: "Tajikistan",
  //                   key: "TJK",
  //                 },
  //                 {
  //                   name: "Tanzania",
  //                   key: "TZA",
  //                 },
  //                 {
  //                   name: "Thailand",
  //                   key: "THA",
  //                 },
  //                 {
  //                   name: "Timor-Leste",
  //                   key: "TLS",
  //                 },
  //                 {
  //                   name: "Togo",
  //                   key: "TGO",
  //                 },
  //                 {
  //                   name: "Tokelau",
  //                   key: "TKL",
  //                 },
  //                 {
  //                   name: "Tonga",
  //                   key: "TON",
  //                 },
  //                 {
  //                   name: "Trinidad and Tobago",
  //                   key: "TTO",
  //                 },
  //                 {
  //                   name: "Tunisia",
  //                   key: "TUN",
  //                 },
  //                 {
  //                   name: "Turkey",
  //                   key: "TUR",
  //                 },
  //                 {
  //                   name: "Turkmenistan",
  //                   key: "TKM",
  //                 },
  //                 {
  //                   name: "Turks and Caicos Islands",
  //                   key: "TCA",
  //                 },
  //                 {
  //                   name: "Tuvalu",
  //                   key: "TUV",
  //                 },
  //                 {
  //                   name: "Uganda",
  //                   key: "UGA",
  //                 },
  //                 {
  //                   name: "Ukraine",
  //                   key: "UKR",
  //                 },
  //                 {
  //                   name: "United Arab Emirates",
  //                   key: "ARE",
  //                 },
  //                 {
  //                   name: "United States of America",
  //                   key: "USA",
  //                 },
  //                 {
  //                   name: "United States Virgin Islands",
  //                   key: "VIR",
  //                 },
  //                 {
  //                   name: "Uruguay",
  //                   key: "URY",
  //                 },
  //                 {
  //                   name: "Uzbekistan",
  //                   key: "UZB",
  //                 },
  //                 {
  //                   name: "Vanuatu",
  //                   key: "VUT",
  //                 },
  //                 {
  //                   name: "Vatican",
  //                   key: "VAT",
  //                 },
  //                 {
  //                   name: "Venezuela",
  //                   key: "VEN",
  //                 },
  //                 {
  //                   name: "Vietnam",
  //                   key: "VNM",
  //                 },
  //                 {
  //                   name: "Wallis and Futuna Islands",
  //                   key: "WLF",
  //                 },
  //                 {
  //                   name: "Yemen",
  //                   key: "YEM",
  //                 },
  //                 {
  //                   name: "Zambia",
  //                   key: "ZMB",
  //                 },
  //                 {
  //                   name: "Zimbabwe",
  //                   key: "ZWE",
  //                 },
  //               ],
  //               parent_question: "residence-country_multi",
  //               required: true,
  //               sub_text: null,
  //             },
  //             answer: "IND",
  //           },
  //           {
  //             question: {
  //               question_key: "residence-prev_uk",
  //               category: "Residence",
  //               question: "Were you a UK tax resident in 2022/23",
  //               type: "Boolean",
  //               parent_question: "residence-country_multi",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: true,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-country_resident": "GBR",
  //         "residence-country_reslastyear": null,
  //         "residence-country_national": "IND",
  //         "residence-prev_uk": true,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-secondres_multi",
  //         category: "Residence",
  //         question: "Did you also have a second tax residence during the tax year?",
  //         type: "Boolean Multi",
  //         sub_text:
  //           "<p>You may have a second tax residence, if <strong>either of the below</strong> applies to you:</p><ul><li><strong>Split-year treatment</strong>: if you have left, or arrived in the UK during the 2023/2024</li><li><strong>Dual residency</strong>: if you are resident in more than one country, this is very rare as you will need to meet domestic tax residency legislation of both the UK and another country.</li></ul>",
  //         submit: "residence-nonres_ukemployments",
  //         sub_questions: [
  //           {
  //             boolean_key: "residence-secondres",
  //             show_on: true,
  //             questions: ["residence-secondres_country", "residence-secondres_reslastyear"],
  //           },
  //         ],
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             booleanQuestion: {
  //               question: {
  //                 question_key: "residence-secondres",
  //                 category: "Residence",
  //                 type: "Boolean",
  //                 parent_question: "residence-secondres_multi",
  //                 required: true,
  //                 question: null,
  //                 sub_text: null,
  //                 help_text: null,
  //               },
  //               answer: false,
  //             },
  //             showOn: true,
  //             questionObjects: [
  //               {
  //                 question: {
  //                   question_key: "residence-secondres_country",
  //                   category: "Residence",
  //                   question: "Which country was this second tax residence in?",
  //                   sub_text:
  //                     "Please ensure you have checked with local legislation and have met the tax residency rules of this country.",
  //                   type: "Country List",
  //                   choices: [
  //                     {
  //                       name: "United Kingdom",
  //                       key: "GBR",
  //                     },
  //                     {
  //                       name: "Afghanistan",
  //                       key: "AFG",
  //                     },
  //                     {
  //                       name: "Albania",
  //                       key: "ALB",
  //                     },
  //                     {
  //                       name: "Algeria",
  //                       key: "DZA",
  //                     },
  //                     {
  //                       name: "American Samoa",
  //                       key: "ASM",
  //                     },
  //                     {
  //                       name: "Andorra",
  //                       key: "AND",
  //                     },
  //                     {
  //                       name: "Angola",
  //                       key: "AGO",
  //                     },
  //                     {
  //                       name: "Anguilla",
  //                       key: "AIA",
  //                     },
  //                     {
  //                       name: "Antigua and Barbuda",
  //                       key: "ATG",
  //                     },
  //                     {
  //                       name: "Argentina",
  //                       key: "ARG",
  //                     },
  //                     {
  //                       name: "Armenia",
  //                       key: "ARM",
  //                     },
  //                     {
  //                       name: "Aruba",
  //                       key: "ABW",
  //                     },
  //                     {
  //                       name: "Australia",
  //                       key: "AUS",
  //                     },
  //                     {
  //                       name: "Austria",
  //                       key: "AUT",
  //                     },
  //                     {
  //                       name: "Azerbaijan",
  //                       key: "AZE",
  //                     },
  //                     {
  //                       name: "Bahamas",
  //                       key: "BHS",
  //                     },
  //                     {
  //                       name: "Bahrain",
  //                       key: "BHR",
  //                     },
  //                     {
  //                       name: "Bangladesh",
  //                       key: "BGD",
  //                     },
  //                     {
  //                       name: "Barbados",
  //                       key: "BRB",
  //                     },
  //                     {
  //                       name: "Belarus",
  //                       key: "BLR",
  //                     },
  //                     {
  //                       name: "Belgium",
  //                       key: "BEL",
  //                     },
  //                     {
  //                       name: "Belize",
  //                       key: "BLZ",
  //                     },
  //                     {
  //                       name: "Benin",
  //                       key: "BEN",
  //                     },
  //                     {
  //                       name: "Bermuda",
  //                       key: "BMU",
  //                     },
  //                     {
  //                       name: "Bhutan",
  //                       key: "BTN",
  //                     },
  //                     {
  //                       name: "Bolivia",
  //                       key: "BOL",
  //                     },
  //                     {
  //                       name: "Bonaire",
  //                       key: "BES",
  //                     },
  //                     {
  //                       name: "Bosnia and Herzegovina",
  //                       key: "BIH",
  //                     },
  //                     {
  //                       name: "Botswana",
  //                       key: "BWA",
  //                     },
  //                     {
  //                       name: "Brazil",
  //                       key: "BRA",
  //                     },
  //                     {
  //                       name: "British Virgin Islands",
  //                       key: "VGB",
  //                     },
  //                     {
  //                       name: "Brunei Darussalam",
  //                       key: "BRN",
  //                     },
  //                     {
  //                       name: "Bulgaria",
  //                       key: "BGR",
  //                     },
  //                     {
  //                       name: "Burkino Faso",
  //                       key: "BFA",
  //                     },
  //                     {
  //                       name: "Burma (also known as Myanmar)",
  //                       key: "MMR",
  //                     },
  //                     {
  //                       name: "Burundi",
  //                       key: "BDI",
  //                     },
  //                     {
  //                       name: "Saint Barthélemy",
  //                       key: "BLM",
  //                     },
  //                     {
  //                       name: "Cambodia",
  //                       key: "KHM",
  //                     },
  //                     {
  //                       name: "Cameroon",
  //                       key: "CMR",
  //                     },
  //                     {
  //                       name: "Canada",
  //                       key: "CAN",
  //                     },
  //                     {
  //                       name: "Cape Verde",
  //                       key: "CPV",
  //                     },
  //                     {
  //                       name: "Cayman Islands",
  //                       key: "CYM",
  //                     },
  //                     {
  //                       name: "Central African Republic",
  //                       key: "CAF",
  //                     },
  //                     {
  //                       name: "Chad",
  //                       key: "TCD",
  //                     },
  //                     {
  //                       name: "Chile",
  //                       key: "CHL",
  //                     },
  //                     {
  //                       name: "China",
  //                       key: "CHN",
  //                     },
  //                     {
  //                       name: "Christmas Island",
  //                       key: "CXR",
  //                     },
  //                     {
  //                       name: "Cocos (Keeling) Islands",
  //                       key: "CCK",
  //                     },
  //                     {
  //                       name: "Colombia",
  //                       key: "COL",
  //                     },
  //                     {
  //                       name: "Comoros",
  //                       key: "COM",
  //                     },
  //                     {
  //                       name: "Congo",
  //                       key: "COG",
  //                     },
  //                     {
  //                       name: "Cook Islands",
  //                       key: "COK",
  //                     },
  //                     {
  //                       name: "Costa Rica",
  //                       key: "CRI",
  //                     },
  //                     {
  //                       name: "Côte d’Ivoire",
  //                       key: "CIV",
  //                     },
  //                     {
  //                       name: "Croatia",
  //                       key: "HRV",
  //                     },
  //                     {
  //                       name: "Cuba",
  //                       key: "CUB",
  //                     },
  //                     {
  //                       name: "Curaçao",
  //                       key: "CUW",
  //                     },
  //                     {
  //                       name: "Cyprus",
  //                       key: "CYP",
  //                     },
  //                     {
  //                       name: "Czech Republic",
  //                       key: "CZE",
  //                     },
  //                     {
  //                       name: "Democratic Republic of the Congo(formerly Zaire)",
  //                       key: "COD",
  //                     },
  //                     {
  //                       name: "Denmark",
  //                       key: "DNK",
  //                     },
  //                     {
  //                       name: "Djibouti",
  //                       key: "DJI",
  //                     },
  //                     {
  //                       name: "Dominica",
  //                       key: "DMA",
  //                     },
  //                     {
  //                       name: "Dominican Republic",
  //                       key: "DOM",
  //                     },
  //                     {
  //                       name: "Ecuador",
  //                       key: "ECU",
  //                     },
  //                     {
  //                       name: "Egypt",
  //                       key: "EGY",
  //                     },
  //                     {
  //                       name: "El Salvador",
  //                       key: "SLV",
  //                     },
  //                     {
  //                       name: "Equatorial Guinea",
  //                       key: "GNQ",
  //                     },
  //                     {
  //                       name: "Eritrea",
  //                       key: "ERI",
  //                     },
  //                     {
  //                       name: "Estonia",
  //                       key: "EST",
  //                     },
  //                     {
  //                       name: "Ethiopia",
  //                       key: "ETH",
  //                     },
  //                     {
  //                       name: "Falkland Islands",
  //                       key: "FLK",
  //                     },
  //                     {
  //                       name: "Faroe Islands",
  //                       key: "FRO",
  //                     },
  //                     {
  //                       name: "Fiji",
  //                       key: "FJI",
  //                     },
  //                     {
  //                       name: "Finland",
  //                       key: "FIN",
  //                     },
  //                     {
  //                       name: "France",
  //                       key: "FRA",
  //                     },
  //                     {
  //                       name: "French Guiana",
  //                       key: "GUF",
  //                     },
  //                     {
  //                       name: "French Polynesia",
  //                       key: "PYF",
  //                     },
  //                     {
  //                       name: "Gabon",
  //                       key: "GAB",
  //                     },
  //                     {
  //                       name: "Gambia",
  //                       key: "GMB",
  //                     },
  //                     {
  //                       name: "Georgia",
  //                       key: "GEO",
  //                     },
  //                     {
  //                       name: "Germany",
  //                       key: "DEU",
  //                     },
  //                     {
  //                       name: "Ghana",
  //                       key: "GHA",
  //                     },
  //                     {
  //                       name: "Gibraltar",
  //                       key: "GIB",
  //                     },
  //                     {
  //                       name: "Greece",
  //                       key: "GRC",
  //                     },
  //                     {
  //                       name: "Greenland",
  //                       key: "GRL",
  //                     },
  //                     {
  //                       name: "Grenada",
  //                       key: "GRD",
  //                     },
  //                     {
  //                       name: "Guadeloupe",
  //                       key: "GLP",
  //                     },
  //                     {
  //                       name: "Guam",
  //                       key: "GUM",
  //                     },
  //                     {
  //                       name: "Guatemala",
  //                       key: "GTM",
  //                     },
  //                     {
  //                       name: "Guernsey",
  //                       key: "GGY",
  //                     },
  //                     {
  //                       name: "Guinea",
  //                       key: "GIN",
  //                     },
  //                     {
  //                       name: "Guinea-Bissau",
  //                       key: "GNB",
  //                     },
  //                     {
  //                       name: "Guyana",
  //                       key: "GUY",
  //                     },
  //                     {
  //                       name: "Haiti",
  //                       key: "HTI",
  //                     },
  //                     {
  //                       name: "Honduras",
  //                       key: "HND",
  //                     },
  //                     {
  //                       name: "Hong Kong (SAR)",
  //                       key: "HKG",
  //                     },
  //                     {
  //                       name: "Hungary",
  //                       key: "HUN",
  //                     },
  //                     {
  //                       name: "Iceland",
  //                       key: "ISL",
  //                     },
  //                     {
  //                       name: "India",
  //                       key: "IND",
  //                     },
  //                     {
  //                       name: "Indonesia",
  //                       key: "IDN",
  //                     },
  //                     {
  //                       name: "Iran",
  //                       key: "IRN",
  //                     },
  //                     {
  //                       name: "Iraq",
  //                       key: "IRQ",
  //                     },
  //                     {
  //                       name: "Ireland (Republic of)",
  //                       key: "IRL",
  //                     },
  //                     {
  //                       name: "Isle of Man",
  //                       key: "IMN",
  //                     },
  //                     {
  //                       name: "Israel",
  //                       key: "ISR",
  //                     },
  //                     {
  //                       name: "Italy",
  //                       key: "ITA",
  //                     },
  //                     {
  //                       name: "Jamaica",
  //                       key: "JAM",
  //                     },
  //                     {
  //                       name: "Japan",
  //                       key: "JPN",
  //                     },
  //                     {
  //                       name: "Jersey",
  //                       key: "JEY",
  //                     },
  //                     {
  //                       name: "Jordan",
  //                       key: "JOR",
  //                     },
  //                     {
  //                       name: "Kazakhstan",
  //                       key: "KAZ",
  //                     },
  //                     {
  //                       name: "Kenya",
  //                       key: "KEN",
  //                     },
  //                     {
  //                       name: "Kiribati",
  //                       key: "KIR",
  //                     },
  //                     {
  //                       name: "Kosovo",
  //                       key: "XKX",
  //                     },
  //                     {
  //                       name: "Kuwait",
  //                       key: "KWT",
  //                     },
  //                     {
  //                       name: "Kyrgyzstan",
  //                       key: "KGZ",
  //                     },
  //                     {
  //                       name: "Laos",
  //                       key: "LAO",
  //                     },
  //                     {
  //                       name: "Latvia",
  //                       key: "LVA",
  //                     },
  //                     {
  //                       name: "Lebanon",
  //                       key: "LBN",
  //                     },
  //                     {
  //                       name: "Lesotho",
  //                       key: "LSO",
  //                     },
  //                     {
  //                       name: "Liberia",
  //                       key: "LBR",
  //                     },
  //                     {
  //                       name: "Libya",
  //                       key: "LBY",
  //                     },
  //                     {
  //                       name: "Liechtenstein",
  //                       key: "LIE",
  //                     },
  //                     {
  //                       name: "Lithuania",
  //                       key: "LTU",
  //                     },
  //                     {
  //                       name: "Luxembourg",
  //                       key: "LUX",
  //                     },
  //                     {
  //                       name: "Macao (SAR)",
  //                       key: "MAC",
  //                     },
  //                     {
  //                       name: "Macedonia (FYR)",
  //                       key: "MKD",
  //                     },
  //                     {
  //                       name: "Madagascar",
  //                       key: "MDG",
  //                     },
  //                     {
  //                       name: "Malawi",
  //                       key: "MWI",
  //                     },
  //                     {
  //                       name: "Malaysia",
  //                       key: "MYS",
  //                     },
  //                     {
  //                       name: "Maldives",
  //                       key: "MDV",
  //                     },
  //                     {
  //                       name: "Mali",
  //                       key: "MLI",
  //                     },
  //                     {
  //                       name: "Malta",
  //                       key: "MLT",
  //                     },
  //                     {
  //                       name: "Marshall Islands",
  //                       key: "MHL",
  //                     },
  //                     {
  //                       name: "Martinique",
  //                       key: "MTQ",
  //                     },
  //                     {
  //                       name: "Mauritania",
  //                       key: "MRT",
  //                     },
  //                     {
  //                       name: "Mauritius",
  //                       key: "MUS",
  //                     },
  //                     {
  //                       name: "Mayotte",
  //                       key: "MYT",
  //                     },
  //                     {
  //                       name: "Mexico",
  //                       key: "MEX",
  //                     },
  //                     {
  //                       name: "Micronesia",
  //                       key: "FSM",
  //                     },
  //                     {
  //                       name: "Moldova",
  //                       key: "MDA",
  //                     },
  //                     {
  //                       name: "Monaco",
  //                       key: "MCO",
  //                     },
  //                     {
  //                       name: "Mongolia",
  //                       key: "MNG",
  //                     },
  //                     {
  //                       name: "Montenegro",
  //                       key: "MNE",
  //                     },
  //                     {
  //                       name: "Montserrat",
  //                       key: "MSR",
  //                     },
  //                     {
  //                       name: "Morocco",
  //                       key: "MAR",
  //                     },
  //                     {
  //                       name: "Mozambique",
  //                       key: "MOZ",
  //                     },
  //                     {
  //                       name: "Namibia",
  //                       key: "NAM",
  //                     },
  //                     {
  //                       name: "Nauru",
  //                       key: "NRU",
  //                     },
  //                     {
  //                       name: "Nepal",
  //                       key: "NPL",
  //                     },
  //                     {
  //                       name: "Netherlands",
  //                       key: "NLD",
  //                     },
  //                     {
  //                       name: "New Caledonia",
  //                       key: "NCL",
  //                     },
  //                     {
  //                       name: "New Zealand",
  //                       key: "NZL",
  //                     },
  //                     {
  //                       name: "Nicaragua",
  //                       key: "NIC",
  //                     },
  //                     {
  //                       name: "Niger",
  //                       key: "NER",
  //                     },
  //                     {
  //                       name: "Nigeria",
  //                       key: "NGA",
  //                     },
  //                     {
  //                       name: "Niue",
  //                       key: "NIU",
  //                     },
  //                     {
  //                       name: "Norfolk Island",
  //                       key: "NFK",
  //                     },
  //                     {
  //                       name: "North Korea",
  //                       key: "PRK",
  //                     },
  //                     {
  //                       name: "Northern Mariana Islands",
  //                       key: "MNP",
  //                     },
  //                     {
  //                       name: "Norway",
  //                       key: "NOR",
  //                     },
  //                     {
  //                       name: "Oman",
  //                       key: "OMN",
  //                     },
  //                     {
  //                       name: "Pakistan",
  //                       key: "PAK",
  //                     },
  //                     {
  //                       name: "Palau",
  //                       key: "PLW",
  //                     },
  //                     {
  //                       name: "Panama",
  //                       key: "PAN",
  //                     },
  //                     {
  //                       name: "Papua New Guinea",
  //                       key: "PNG",
  //                     },
  //                     {
  //                       name: "Paraguay",
  //                       key: "PRY",
  //                     },
  //                     {
  //                       name: "Peru",
  //                       key: "PER",
  //                     },
  //                     {
  //                       name: "Philippines",
  //                       key: "PHL",
  //                     },
  //                     {
  //                       name: "Pitcairn Island",
  //                       key: "PCN",
  //                     },
  //                     {
  //                       name: "Poland",
  //                       key: "POL",
  //                     },
  //                     {
  //                       name: "Portugal",
  //                       key: "PRT",
  //                     },
  //                     {
  //                       name: "Puerto Rico",
  //                       key: "PRI",
  //                     },
  //                     {
  //                       name: "Qatar",
  //                       key: "QAT",
  //                     },
  //                     {
  //                       name: "Reunion",
  //                       key: "REU",
  //                     },
  //                     {
  //                       name: "Romania",
  //                       key: "ROU",
  //                     },
  //                     {
  //                       name: "Russian Federation",
  //                       key: "RUS",
  //                     },
  //                     {
  //                       name: "Rwanda",
  //                       key: "RWA",
  //                     },
  //                     {
  //                       name: "St Helena and Dependencies",
  //                       key: "SHN",
  //                     },
  //                     {
  //                       name: "St Kitts and Nevis",
  //                       key: "KNA",
  //                     },
  //                     {
  //                       name: "St Lucia",
  //                       key: "LCA",
  //                     },
  //                     {
  //                       name: "St Pierre and Miquelon",
  //                       key: "SPM",
  //                     },
  //                     {
  //                       name: "St Vincent and the Grenadines",
  //                       key: "VCT",
  //                     },
  //                     {
  //                       name: "Saba",
  //                       key: "BES",
  //                     },
  //                     {
  //                       name: "Samoa",
  //                       key: "WSM",
  //                     },
  //                     {
  //                       name: "San Marino",
  //                       key: "SMR",
  //                     },
  //                     {
  //                       name: "Sao Tome and Principe",
  //                       key: "STP",
  //                     },
  //                     {
  //                       name: "Saudi Arabia",
  //                       key: "SAU",
  //                     },
  //                     {
  //                       name: "Senegal",
  //                       key: "SEN",
  //                     },
  //                     {
  //                       name: "Serbia and Montenegro",
  //                       key: "SRB",
  //                     },
  //                     {
  //                       name: "Seychelles",
  //                       key: "SYC",
  //                     },
  //                     {
  //                       name: "Sierra Leone",
  //                       key: "SLE",
  //                     },
  //                     {
  //                       name: "Singapore",
  //                       key: "SGP",
  //                     },
  //                     {
  //                       name: "Sint Eustatius",
  //                       key: "BES",
  //                     },
  //                     {
  //                       name: "Sint Maarten (Dutch part)",
  //                       key: "SXM",
  //                     },
  //                     {
  //                       name: "Slovak Republic",
  //                       key: "SVK",
  //                     },
  //                     {
  //                       name: "Slovenia",
  //                       key: "SVN",
  //                     },
  //                     {
  //                       name: "Solomon Islands",
  //                       key: "SLB",
  //                     },
  //                     {
  //                       name: "Somalia",
  //                       key: "SOM",
  //                     },
  //                     {
  //                       name: "South Africa",
  //                       key: "ZAF",
  //                     },
  //                     {
  //                       name: "South Korea",
  //                       key: "KOR",
  //                     },
  //                     {
  //                       name: "South Sudan",
  //                       key: "SSD",
  //                     },
  //                     {
  //                       name: "Spain",
  //                       key: "ESP",
  //                     },
  //                     {
  //                       name: "Sri Lanka",
  //                       key: "LKA",
  //                     },
  //                     {
  //                       name: "Sudan",
  //                       key: "SDN",
  //                     },
  //                     {
  //                       name: "Suriname",
  //                       key: "SUR",
  //                     },
  //                     {
  //                       name: "Svalbard and Jan Mayen Islands",
  //                       key: "SJM",
  //                     },
  //                     {
  //                       name: "Swaziland",
  //                       key: "SWZ",
  //                     },
  //                     {
  //                       name: "Sweden",
  //                       key: "SWE",
  //                     },
  //                     {
  //                       name: "Switzerland",
  //                       key: "CHE",
  //                     },
  //                     {
  //                       name: "Syria",
  //                       key: "SYR",
  //                     },
  //                     {
  //                       name: "Taiwan",
  //                       key: "TWN",
  //                     },
  //                     {
  //                       name: "Tajikistan",
  //                       key: "TJK",
  //                     },
  //                     {
  //                       name: "Tanzania",
  //                       key: "TZA",
  //                     },
  //                     {
  //                       name: "Thailand",
  //                       key: "THA",
  //                     },
  //                     {
  //                       name: "Timor-Leste",
  //                       key: "TLS",
  //                     },
  //                     {
  //                       name: "Togo",
  //                       key: "TGO",
  //                     },
  //                     {
  //                       name: "Tokelau",
  //                       key: "TKL",
  //                     },
  //                     {
  //                       name: "Tonga",
  //                       key: "TON",
  //                     },
  //                     {
  //                       name: "Trinidad and Tobago",
  //                       key: "TTO",
  //                     },
  //                     {
  //                       name: "Tunisia",
  //                       key: "TUN",
  //                     },
  //                     {
  //                       name: "Turkey",
  //                       key: "TUR",
  //                     },
  //                     {
  //                       name: "Turkmenistan",
  //                       key: "TKM",
  //                     },
  //                     {
  //                       name: "Turks and Caicos Islands",
  //                       key: "TCA",
  //                     },
  //                     {
  //                       name: "Tuvalu",
  //                       key: "TUV",
  //                     },
  //                     {
  //                       name: "Uganda",
  //                       key: "UGA",
  //                     },
  //                     {
  //                       name: "Ukraine",
  //                       key: "UKR",
  //                     },
  //                     {
  //                       name: "United Arab Emirates",
  //                       key: "ARE",
  //                     },
  //                     {
  //                       name: "United States of America",
  //                       key: "USA",
  //                     },
  //                     {
  //                       name: "United States Virgin Islands",
  //                       key: "VIR",
  //                     },
  //                     {
  //                       name: "Uruguay",
  //                       key: "URY",
  //                     },
  //                     {
  //                       name: "Uzbekistan",
  //                       key: "UZB",
  //                     },
  //                     {
  //                       name: "Vanuatu",
  //                       key: "VUT",
  //                     },
  //                     {
  //                       name: "Vatican",
  //                       key: "VAT",
  //                     },
  //                     {
  //                       name: "Venezuela",
  //                       key: "VEN",
  //                     },
  //                     {
  //                       name: "Vietnam",
  //                       key: "VNM",
  //                     },
  //                     {
  //                       name: "Wallis and Futuna Islands",
  //                       key: "WLF",
  //                     },
  //                     {
  //                       name: "Yemen",
  //                       key: "YEM",
  //                     },
  //                     {
  //                       name: "Zambia",
  //                       key: "ZMB",
  //                     },
  //                     {
  //                       name: "Zimbabwe",
  //                       key: "ZWE",
  //                     },
  //                   ],
  //                   parent_question: "residence-secondres_multi",
  //                   required: true,
  //                   help_text: null,
  //                 },
  //                 answer: null,
  //               },
  //               {
  //                 question: {
  //                   question_key: "residence-secondres_reslastyear",
  //                   category: "Residence",
  //                   question: "Were you also tax resident there last year (2022/23)?",
  //                   type: "Boolean",
  //                   parent_question: "residence-secondres_multi",
  //                   required: true,
  //                   sub_text: null,
  //                   help_text: null,
  //                 },
  //                 answer: null,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-secondres": false,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-split_year_choice",
  //         category: "Residence",
  //         question: "Do you need to claim split year treatment?",
  //         type: "Single Choice",
  //         sub_text:
  //           "Split-year treatment can be helpful in making sure you're not being taxed twice in two different countries.\n<p>Click the <strong>help icon</strong> for more information.</p>",
  //         help_text:
  //           '<h3>Split-year treatment</h3>\n<p>If you arrived or left the UK within the tax year, the year will be split into two parts.</p>\n<ul>\n<li>The first part is where you are taxed as a <strong>UK resident</strong></li>\n<li>The second part is where you are classed as a <strong>non-UK resident</strong></li>\n</ul>\n<p>You can claim <strong>split-year treatment</strong> which will make sure you only have to pay UK tax in the part you were considered a tax resident, rather than the whole tax year.</p>\n<h4>Why is it a good thing?</h4>\n<p>Split-year treatment can be helpful in making sure you\'re not being taxed twice. Please remember that you cannot choose the date which you split the year.</p>\n<h4>Split-year treatment may apply to you if:</h4>\n<ul>\n<li>You start to work full-time in the UK</li>\n<li>You stop full-time work overseas and return to the UK</li>\n<li>Your partner stops working overseas and you return to the UK with them</li>\n<li>You create a home in the UK only</li>\n<li>You\'re starting to create a home in the UK whilst having an accessible home abroad</li>\n</ul>\n<h4>Or</h4>\n<ul>\n<li>You start full-time work outside the UK</li>\n<li>Your partner starts working full-time outside of the UK and you join them</li>\n<li>You stop living at your home in the UK</li>\n</ul>\n<p>If you\'re not sure, <a rel="noopener" href="https://www.taxd.co.uk/contact" target="_blank">contact the Taxd team</a> and we\'ll be happy to help.</p>',
  //         submit: "residence-remittance_multi",
  //         choices: [
  //           {
  //             key: "__leaving",
  //             name: "Leaving",
  //             skip: true,
  //           },
  //           {
  //             key: "__arrival",
  //             name: "Arrival",
  //             skip: true,
  //           },
  //           {
  //             key: "__no",
  //             name: "No",
  //             skip: true,
  //           },
  //         ],
  //         required: true,
  //       },
  //       answer: "__arrival",
  //     },
  //     {
  //       question: {
  //         question_key: "residence-split_arrival_reason",
  //         category: "Residence",
  //         question: "Please select your reason for coming the UK?",
  //         type: "Multiple Choice",
  //         submit: "residence-split_arrival_date",
  //         choices: [
  //           {
  //             key: "__uk_home",
  //             name: "Starting to have a home in the UK only",
  //           },
  //           {
  //             key: "__work_uk",
  //             name: "Starting full-time work in the UK",
  //           },
  //           {
  //             key: "__cease_overseas",
  //             name: "Ceasing full-time work overseas",
  //           },
  //           {
  //             key: "__partner_cease",
  //             name: "Partner/Spouse of someone ceasing full-time work overseas",
  //           },
  //           {
  //             key: "__both_homes",
  //             name: "Starting to have a home in the UK (whilst having accessible home abroad)",
  //           },
  //         ],
  //         required: true,
  //         sub_text: null,
  //         help_text: null,
  //       },
  //       answer: ["__uk_home", "__work_uk", "__cease_overseas", "__partner_cease", "__both_homes"],
  //     },
  //     {
  //       question: {
  //         question_key: "residence-split_arrival_date",
  //         category: "Residence",
  //         question: "Your split year arrival date.",
  //         type: "Tax Year Date",
  //         sub_text: "<i>This is likely the date you came to the UK.</i>",
  //         submit: "residence-split_days_multi",
  //         required: true,
  //         help_text: null,
  //         tax_year: "2023/2024",
  //       },
  //       answer: "2024-04-03T00:00:00.000Z",
  //     },
  //     {
  //       question: {
  //         question_key: "residence-split_days_multi",
  //         category: "Residence",
  //         question: "Between 06/04/2023 and 03/04/2024, how many days did you spend in the UK?",
  //         type: "Multi Q",
  //         sub_text:
  //           "<p>If you left the UK, your assessment period is from the date of your departure until the end of the tax year on 5th April.</p><p>If you arrived in the UK during the tax year, your assessment period is from 6th April until your arrival date in the UK.</p>",
  //         submit: "residence-split_invalid",
  //         sub_questions: ["residence-split_days_days", "residence-split_days_workdays"],
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-split_days_days",
  //               category: "Residence",
  //               question: "Number of days spent in the UK between 06/04/2023 and 03/04/2024.",
  //               type: "Numeric",
  //               parent_question: "residence-split_days_multi",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: 0,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-split_days_workdays",
  //               category: "Residence",
  //               question: "How many of these days were spent working?",
  //               type: "Numeric",
  //               sub_text:
  //                 "A day is classed as a workday if you <strong>work for 3 hours or more</strong> on a given day.",
  //               parent_question: "residence-split_days_multi",
  //               required: true,
  //               help_text: null,
  //             },
  //             answer: 0,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-split_days_days": 0,
  //         "residence-split_days_workdays": 0,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-remittance_multi",
  //         category: "Residence",
  //         question: "Would you like to claim remittance basis?",
  //         type: "Boolean Multi",
  //         sub_text:
  //           "The <strong>remittance basis</strong> is a tax treatment that's available to people who are a resident but not domiciled in the UK and usually have foreign income and gains.<p>This can help to stop double taxation.</p>",
  //         help_text:
  //           '<h3>Remittance Basis</h3><strong>Arising Basis</strong><p>Most UK residents pay taxes based on the arising basis. This means they are taxed on their worldwide income and gains in the year they are earned or accrued abroad. For example, if you earn money from a foreign job in a tax year, you pay taxes on that income for that year. The same goes for capital gains; they are taxed in the year the gain is realized, usually when the asset is sold.</p><strong>Remittance Basis</strong><p>The remittance basis is different. It allows you to delay paying UK taxes on foreign income and gains until they are "remitted" to the UK. So, if you keep your foreign income and gains offshore and never bring them to the UK, you can postpone the tax indefinitely. Individuals can choose to use the remittance basis on a year-by-year basis, as long as they meet certain criteria.</p><p>Foreign income and gains are considered "remitted" to the UK if:</p><ul><li>They are brought to, received in, or used in the UK.</li><li>A service in the UK is paid for using foreign income or gains.</li><li>They are used overseas to cover a debt related to property or services in the UK.</li></ul><p>In simple terms, the remittance basis provides flexibility in when and how you pay UK taxes on foreign income and gains.</p>',
  //         submit: "residence-remittance_invalid",
  //         sub_questions: [
  //           {
  //             boolean_key: "residence-remittance",
  //             show_on: true,
  //             questions: [
  //               "residence-remittance_claimedbefore",
  //               "residence-remittance_under2k",
  //               "residence-remittance_yearsukres",
  //               "residence-remittance_firstcametouk",
  //             ],
  //           },
  //         ],
  //         display_rulesets_rule: "or",
  //         display_rulesets: [
  //           {
  //             priority: 1,
  //             if_display_false: "residence-oswdr",
  //             rules: [
  //               {
  //                 question_key: "Introduction.intro-nondom",
  //                 operator: "is",
  //                 value: true,
  //               },
  //               {
  //                 question_key: "Introduction.intro-taxyearoptions",
  //                 operator: "contains",
  //                 value: "__income_overseas",
  //               },
  //             ],
  //             type: "and",
  //           },
  //           {
  //             priority: 2,
  //             if_display_false: "residence-oswdr",
  //             rules: [
  //               {
  //                 question_key: "non-resident",
  //                 operator: "is",
  //                 value: false,
  //               },
  //             ],
  //             type: "and",
  //           },
  //         ],
  //         required: true,
  //         questionObjects: [
  //           {
  //             booleanQuestion: {
  //               question: {
  //                 question_key: "residence-remittance",
  //                 category: "Residence",
  //                 type: "Boolean",
  //                 parent_question: "residence-remittance_multi",
  //                 required: true,
  //                 question: null,
  //                 sub_text: null,
  //                 help_text: null,
  //               },
  //               answer: true,
  //             },
  //             showOn: true,
  //             questionObjects: [
  //               {
  //                 question: {
  //                   question_key: "residence-remittance_claimedbefore",
  //                   category: "Residence",
  //                   question: "Have you claimed the remittance basis before?",
  //                   type: "Boolean",
  //                   parent_question: "residence-remittance_multi",
  //                   required: true,
  //                   sub_text: null,
  //                   help_text: null,
  //                 },
  //                 answer: true,
  //               },
  //               {
  //                 question: {
  //                   question_key: "residence-remittance_under2k",
  //                   category: "Residence",
  //                   question: "Is your unremitted income less than £2,000?",
  //                   type: "Boolean",
  //                   help_text:
  //                     "<h3>Unremitted income</h3>\n<p>If you have income and gains from overseas but do not bring them to the UK, this is your <strong>unremitted income</strong>.</p>",
  //                   parent_question: "residence-remittance_multi",
  //                   required: true,
  //                   sub_text: null,
  //                 },
  //                 answer: true,
  //               },
  //               {
  //                 question: {
  //                   question_key: "residence-remittance_yearsukres",
  //                   category: "Residence",
  //                   question: "How many years have you been a UK resident (including 2023/2024)?",
  //                   type: "Numeric",
  //                   parent_question: "residence-remittance_multi",
  //                   required: true,
  //                   sub_text: null,
  //                   help_text: null,
  //                 },
  //                 answer: 2,
  //               },
  //               {
  //                 question: {
  //                   question_key: "residence-remittance_firstcametouk",
  //                   category: "Residence",
  //                   question: "When did you first come and live in the UK?",
  //                   type: "Date",
  //                   parent_question: "residence-remittance_multi",
  //                   required: true,
  //                   sub_text: null,
  //                   help_text: null,
  //                   tax_year: "2023/2024",
  //                 },
  //                 answer: "2024-06-17T00:00:00.000Z",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-remittance": true,
  //         "residence-remittance_claimedbefore": true,
  //         "residence-remittance_under2k": true,
  //         "residence-remittance_yearsukres": 2,
  //         "residence-remittance_firstcametouk": "2024-06-17T00:00:00.000Z",
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-remittance_incomemulti",
  //         category: "Residence",
  //         question: "Nominated Income & Gains",
  //         type: "Multi Q",
  //         sub_text:
  //           "HMRC would appreciate knowing the nature of your overseas income to understand why you're opting for the remittance basis. You don't have to list all your overseas income; instead, you can nominate specific income to report. For instance, if you receive rental income from an overseas property (non-CGT income), you can enter the amount and provide additional details in the information section.",
  //         submit: "residence-remittance_previousyear",
  //         sub_questions: [
  //           "residence-remittance_income",
  //           "residence-remittance_capitalgains",
  //           "residence-remittance_info",
  //         ],
  //         display_rulesets: [
  //           {
  //             if_display_false: "residence-last5years_nonres",
  //             rules: [
  //               {
  //                 question_key: "residence-remittance_incomemulti.residence-remittance",
  //                 operator: "is",
  //                 value: true,
  //               },
  //             ],
  //             type: "and",
  //           },
  //         ],
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-remittance_income",
  //               category: "Residence",
  //               question: "Non Capital Gains Income",
  //               type: "Numeric",
  //               unit: "£",
  //               sub_text: "<i>e.g. Rental Income, Savings Interest, Dividends</i>",
  //               parent_question: "residence-remittance_incomemulti",
  //               help_text: null,
  //             },
  //             answer: 12222,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-remittance_capitalgains",
  //               category: "Residence",
  //               question: "Capital gain income",
  //               type: "Numeric",
  //               unit: "£",
  //               sub_text: "<i>e.g. Property sale</i>",
  //               parent_question: "residence-remittance_incomemulti",
  //               help_text: null,
  //             },
  //             answer: 21,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-remittance_info",
  //               category: "Residence",
  //               question: "Please provide some information around this nominated income",
  //               type: "Free text",
  //               sub_text: '<i>"This income was derived from..."</i>',
  //               parent_question: "residence-remittance_incomemulti",
  //               required: true,
  //               help_text: null,
  //             },
  //             answer: "2121212saxasx",
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-remittance_income": 12222,
  //         "residence-remittance_capitalgains": 21,
  //         "residence-remittance_info": "2121212saxasx",
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-remittance_previousyear",
  //         category: "Residence",
  //         question:
  //           "Did you bring income to the UK that you earned in a previous tax year when you claimed the remittance basis?",
  //         type: "Boolean",
  //         sub_text:
  //           "For example, if during the 2023/2024 you remitted income to the UK that was earned abroad during 2022/23. Whilst also claiming remittance basis to not pay UK tax on this previously earned income.",
  //         if_true: "residence-remittance_previousyearunsupported",
  //         if_false: "residence-oswdr",
  //         required: true,
  //         help_text: null,
  //       },
  //       answer: false,
  //     },
  //     {
  //       question: {
  //         question_key: "residence-oswdr",
  //         category: "Residence",
  //         question: "Do you need to claim overseas workday relief?",
  //         type: "Boolean",
  //         sub_text:
  //           "This is a rare tax relief that applies to income earned outside of the UK by people who are non-UK domiciled. <p>Click the <strong>help icon</strong> for more information.</p>",
  //         help_text:
  //           "<h3>Who can claim Overseas Workday Relief (OWR)?</h3><p>You can claim this if you:</p><ul><li>Are a UK tax resident</li><li>Are non-UK domiciled during the tax year</li><li>Perform duties wholly or partly abroad</li><li>Do not bring your overseas income over to the UK </li></ul><hr /><p>OWR means your foreign earnings will not be taxed by HMRC. Please note that this relief can only be claimed after three consecutive years of <strong>non-UK tax residence</strong>. After that, it is available for the first three tax years of UK tax residency. </p>",
  //         if_true: "residence-oswdrmulti",
  //         if_false: "residence-last5years_nonres",
  //         required: true,
  //       },
  //       answer: true,
  //     },
  //     {
  //       question: {
  //         question_key: "residence-oswdrmulti",
  //         category: "Residence",
  //         question: "Add employments for Overseas Workday Relief",
  //         type: "Row",
  //         sub_text:
  //           'Please note, you will need to complete the "Employment" category before you can add an employer here.',
  //         submit: "residence-last5years_nonres",
  //         sub_questions: ["residence-employers", "residence-overseasdays", "residence-ukdays"],
  //         row_title_question: "residence-employers",
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-employers",
  //               category: "Residence",
  //               question: "Which employment did you work overseas for?",
  //               type: "Subform link",
  //               parent_question: "residence-oswdrmulti",
  //               linked_category: "Employer",
  //               row_data_label: "Employment",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //               choices: [
  //                 {
  //                   key: "6665bb04eb3028ffb6d03464",
  //                   name: "12313",
  //                 },
  //               ],
  //             },
  //             answer: null,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-overseasdays",
  //               category: "Residence",
  //               question: "How many overseas workdays did you have?",
  //               type: "Numeric",
  //               parent_question: "residence-oswdrmulti",
  //               row_data_label: "Overseas workdays",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: null,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-ukdays",
  //               category: "Residence",
  //               question: "How many days did you work in the UK?",
  //               type: "Numeric",
  //               parent_question: "residence-oswdrmulti",
  //               row_data_label: "UK workdays",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: null,
  //           },
  //         ],
  //       },
  //       answer: [
  //         {
  //           "residence-employers": "6665bb04eb3028ffb6d03464",
  //           "residence-overseasdays": 12,
  //           "residence-ukdays": 2,
  //           _id: "66756110e883423fbf01d0e8",
  //         },
  //       ],
  //     },
  //     {
  //       question: {
  //         question_key: "residence-last5years_nonres",
  //         category: "Residence",
  //         question:
  //           "Were you a non-resident in the past five years and received untaxed UK Capital Gains or untaxed UK Dividends?",
  //         type: "Boolean",
  //         sub_text:
  //           "Temporary Non Residence Rules:<br /><ul><li>If you become non-resident and then return to the UK within five years of leaving, you may fall under temporary non residence rules.</li><li>If you received capital gains or untaxed UK dividends during your non-resident period, you're required to report them, and they will be subject to tax in the tax year when you return.</li></ul>",
  //         if_true: "residence-last5years_incomemulti",
  //         if_false: "residence-dualresident",
  //         display_rulesets: [
  //           {
  //             if_display_false: "residence-dualresident",
  //             rules: [
  //               {
  //                 question_key: "residence-split_year_choice",
  //                 operator: "is not",
  //                 value: "__leaving",
  //               },
  //             ],
  //             type: "and",
  //           },
  //         ],
  //         required: true,
  //         help_text: null,
  //       },
  //       answer: true,
  //     },
  //     {
  //       question: {
  //         question_key: "residence-last5years_incomemulti",
  //         category: "Residence",
  //         question: "Capital Gains + Dividends whilst you were a non-UK tax resident.",
  //         type: "Multi Q",
  //         sub_text: "Please provide total value of gains and dividends below.",
  //         submit: "residence-dualresident",
  //         sub_questions: ["residence-last5years_cgt", "residence-last5years_divs"],
  //         required: true,
  //         help_text: null,
  //         questionObjects: [
  //           {
  //             question: {
  //               question_key: "residence-last5years_cgt",
  //               category: "Residence",
  //               question: "Capital Gains during non resident period",
  //               type: "Numeric",
  //               unit: "£",
  //               parent_question: "residence-last5years_incomemulti",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: 12,
  //           },
  //           {
  //             question: {
  //               question_key: "residence-last5years_divs",
  //               category: "Residence",
  //               question: "Dividends received during non resident period",
  //               type: "Numeric",
  //               unit: "£",
  //               parent_question: "residence-last5years_incomemulti",
  //               required: true,
  //               sub_text: null,
  //               help_text: null,
  //             },
  //             answer: 12,
  //           },
  //         ],
  //       },
  //       answer: {
  //         "residence-last5years_cgt": 12,
  //         "residence-last5years_divs": 12,
  //       },
  //     },
  //     {
  //       question: {
  //         question_key: "residence-anyotherinfo",
  //         category: "Residence",
  //         question: "Additional notes to send to HMRC",
  //         sub_text:
  //           "This won't impact your tax calculation, but in some cases can be useful in providing HMRC with additional context.<ul><li><i>If we think this is important for your case, we have generated information below for you.</i></li> <li><i>If it's blank, then don't worry, you can go right ahead or manually include notes if required.</i></li></ul>",
  //         type: "Generated Content",
  //         validation: {
  //           regex: "^[A-Za-z0-9 &'\\(\\)*,-\\.@£\\n/]*$",
  //           title:
  //             "Between 0 and 2000 characters allowed. Allowed characters are A-Za-z0-9&'()*,-.@£",
  //         },
  //         required: true,
  //         help_text: null,
  //       },
  //       answer: {
  //         __validated: true,
  //         __generatedValue:
  //           "I meet the conditions of case 5 as I started full-time work in the UK, case 6 as I ceasing full-time work overseas, case 7 as I am the partner of someone who stopped working overseas, case 4 as I started to have a home in the UK only and case 8 as I started to have a home in the UK.\n\nI am domiciled out of the UK and making a claim for the remittance basis. My overseas income is kept outside of the UK.\n\n2121212saxasx\n\nI am eligible to claim overseas workday relief. I am not domiciled to the UK, taxed on the remittance basis and I performed employment duties outside of the UK. I am within the 3 year rule. The earnings for these workdays were paid overseas and I have not remitted them into the UK.\n\n",
  //       },
  //     },
  //   ],
  //   status: "Complete",
  //   categoryExtras: {
  //     name: "Residence",
  //     start: "residence-nonres_tests",
  //   },
  //   summary: {
  //     title: "Residence (SA109)",
  //     subtext:
  //       "Initially you are considered as a UK tax resident for the 2023-24 tax year. Based on your answers you are eligible for split year treatment. Split year allows you to split the UK tax year into a “UK resident” and “UK non resident portion”.<br><br>Based on your answers you are eligible to claim the remittance basis. On the remittance basis you are not taxed on income from overseas provided you did not bring that income into the UK. \n            <br>You do not need to give full details of this income if kept outside of the UK. Any income brought into the UK would need to be included in the relevant section as overseas income.\n            <br><br>Below is a breakdown of the key figures you told us regarding the Residence section:",
  //     data: [
  //       {
  //         label: "UK Resident",
  //         value: "Yes",
  //       },
  //       {
  //         label: "Days in the UK",
  //         value: 0,
  //       },
  //       {
  //         label: "Work days in the UK",
  //         value: 0,
  //       },
  //       {
  //         label: "Nationality",
  //       },
  //       {
  //         label: "Country resident",
  //       },
  //     ],
  //   },
  //   progressBarLength: 32,
  //   progressBarIndex: 32,
  // };

  // use useCallback
  const RenderItem = useCallback(
    ({ item, ind }: { item: object; ind: number }) => {
      const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
        HTMLDivElement,
        HTMLDivElement
      >({
        isList: true,
        offset: backNext === "back" ? -700 : 1100,
      });
      const onScroll = (items: string) => {
        scrollIntoView({
          alignment: "end",
        });
        setBackNext(items);
      };
      return (
        <Survey
          ref={scrollableRef}
          key={ind}
          renderData={item}
          renderDataLength={renderData?.length}
          index={ind}
          targetRef={targetRef}
          onBackClick={() => onScroll("back")}
          onNextClick={() => onScroll("next")}
        />
      );
    },
    [backNext],
  );
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      bg={theme.colors.white[1]}>
      {JsonData?.questionFlow?.map((item: object, index: number) => (
        <RenderItem item={item} ind={index} key={index} />
      ))}
    </Box>
  );
}
