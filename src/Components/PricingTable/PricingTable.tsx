import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RemoveIcon from "@mui/icons-material/Remove";

// import { nodes } from "../data";
interface Node {
  name: string;
  superScript?: string;
  basic: React.ReactNode | string;
  suite: React.ReactNode | string;
  professional: React.ReactNode | string;
  helpTitle?: string;
}
interface PricingCategory {
  headings: string[];
  Nodes: Node[];
}

let AnalysisTable: PricingCategory[] = [
  {
    headings: ["Quick Look", "Basic", "Suite", "Professional"],
    Nodes: [
      {
        name: "Money-back guarantee help",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
        helpTitle:
          "Try Jungle Scout risk-free for 7 days with our money-back guarantee.",
      },
      {
        name: "Cancel any time help",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
        helpTitle:
          "Not a fit? Not a problem. Cancel your subscription any time.",
      },
      {
        name: "Included seats",
        basic: 1,
        suite: 1,
        professional: 6,
        helpTitle:
          "The number of users you can have on your account without an additional charge.",
      },
      {
        name: "Additional seat cost",
        basic: "N/A",
        suite: "$459 / yr",
        professional: "$459 / yr",
      },
    ],
  },
  {
    headings: ["Product Research", "Basic", "Suite", "Professional"],
    Nodes: [
      {
        name: "Browser Extension",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
      },
      {
        name: "Opportunity Score",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
      },
      {
        name: "Product Tracker",
        basic: "20 products",
        suite: "150 products",
        professional: "1,000 products*",
      },
    ],
  },
  {
    headings: ["INDUSTRY-LEADING DATA", "Basic", "Suite", "Professional"],
    Nodes: [
      {
        name: "AccuSales Estimates",
        superScript: "TM",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
      },
      {
        name: "Historical product tracking data",
        basic: "1 month",
        suite: "3 month",
        professional: "6 months",
      },
      {
        name: "Historical keyword data",
        basic: "1 month",
        suite: "1 year",
        professional: "2 years",
      },
    ],
  },
  {
    headings: ["ADVANCED SELLER FEATURES", "Basic", "Suite", "Professional"],
    Nodes: [
      {
        name: "AI Assist Beta",
        superScript: "TM",
        basic: <RemoveIcon fontSize="small" />,
        suite: "50 / mo",
        professional: "50 / mo",
      },
      {
        name: "Review Automation ",
        basic: <CheckIcon color="success" />,
        suite: <CheckIcon color="success" />,
        professional: <CheckIcon color="success" />,
      },
      {
        name: "Review Automation: Delayed Send",
        basic: <RemoveIcon fontSize="small" />,
        suite: <RemoveIcon fontSize="small" />,
        professional: <CheckIcon color="success" />,
      },
      {
        name: "Listing Grader",
        basic: "100 / mo",
        suite: "200 / mo",
        professional: "500 / mo",
      },
    ],
  },
  // {
  //   headings:,
  //   Nodes:,
  // },
];

// const quickLookNodes: QuickLookNode[] = [
//   {
//     name: "Money-back guarantee help",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//     helpTitle:
//       "Try Jungle Scout risk-free for 7 days with our money-back guarantee.",
//   },
//   {
//     name: "Cancel any time help",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//     helpTitle: "Not a fit? Not a problem. Cancel your subscription any time.",
//   },
//   {
//     name: "Included seats",
//     basic: 1,
//     suite: 1,
//     professional: 6,
//     helpTitle:
//       "The number of users you can have on your account without an additional charge.",
//   },
//   {
//     name: "Additional seat cost",
//     basic: "N/A",
//     suite: "$459 / yr",
//     professional: "$459 / yr",
//   },
// ];

// const QuickLookColoumns: string[] = [
//   "Quick Look",
//   "Basic",
//   "Suite",
//   "Professional",
// ];
// const ProductReasearchColoumns: string[] = [
//   "Product Research",
//   "Basic",
//   "Suite",
//   "Professional",
// ];

// const ProductResearchNodes: QuickLookNode[] = [
//   {
//     name: "Browser Extension",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//   },
//   {
//     name: "Opportunity Score",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//   },
//   {
//     name: "Product Tracker",
//     basic: "20 products",
//     suite: "150 products",
//     professional: "1,000 products*",
//   },
// ];
// const IndustryLeadingDataColoumns: string[] = [
//   "INDUSTRY-LEADING DATA",
//   "Basic",
//   "Suite",
//   "Professional",
// ];
// const IndustryLeadingDataNodes: QuickLookNode[] = [
//   {
//     name: "AccuSales Estimates",
//     superScript: "TM",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//   },
//   {
//     name: "Historical product tracking data",
//     basic: "1 month",
//     suite: "3 month",
//     professional: "6 months",
//   },
//   {
//     name: "Historical keyword data",
//     basic: "1 month",
//     suite: "1 year",
//     professional: "2 years",
//   },
// ];
// const AdvanceSellerColoumns: string[] = [
//   "ADVANCED SELLER FEATURES",
//   "Basic",
//   "Suite",
//   "Professional",
// ];
// const AdvanceSellerNodes: QuickLookNode[] = [
//   {
//     name: "AI Assist Beta",
//     superScript: "TM",
//     basic: <RemoveIcon fontSize="small" />,
//     suite: "50 / mo",
//     professional: "50 / mo",
//   },
//   {
//     name: "Review Automation ",
//     basic: <CheckIcon color="success" />,
//     suite: <CheckIcon color="success" />,
//     professional: <CheckIcon color="success" />,
//   },
//   {
//     name: "Review Automation: Delayed Send",
//     basic: <RemoveIcon fontSize="small" />,
//     suite: <RemoveIcon fontSize="small" />,
//     professional: <CheckIcon color="success" />,
//   },
//   {
//     name: "Listing Grader",
//     basic: "100 / mo",
//     suite: "200 / mo",
//     professional: "500 / mo",
//   },
// ];
const PricingTable = () => {
  return (
    <>
      <div className="w-full max-w-[70%] mx-auto mb-36">
        <table className="w-full table-auto border border-slate-300 hidden md:block">
          {/* <tr className="py-4 flex items-center"> */}
          <tbody>
            {AnalysisTable.map((section) => {
              return (
                <>
                  <tr className="border-y-2 border-black text-[12px]">
                    {section.headings.map((item, index) => (
                      <th
                        key={index}
                        className={`py-4 w-1/4 px-4.5 ${
                          index !== 0 ? "text-center" : "uppercase text-left"
                        }`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                  {section.Nodes.map((item, index) => (
                    <tr
                      key={index}
                      className={`text-[14px] border-b border-slate-300 ${
                        index % 2 === 0 ? "bg-neutral-100" : ""
                      }`}
                    >
                      <td className="w-[27%] py-4 px-4.5 text-left">
                        <p className="flex flex-row gap-x-[1px] whitespace-nowrap">
                          <span>{item.name}</span>
                          <span>
                            <HelpOutlineIcon
                              sx={{ fontSize: 12 }}
                              className="fill-neutral-300 stroke-green-500"
                            />
                          </span>
                        </p>
                      </td>
                      <td className="px-4.5 py-4 text-center">{item.basic}</td>
                      <td className="px-4.5 py-4 text-center">{item.suite}</td>
                      <td className="px-4.5 py-4 text-center">
                        {item.professional}
                      </td>
                    </tr>
                  ))}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PricingTable;
