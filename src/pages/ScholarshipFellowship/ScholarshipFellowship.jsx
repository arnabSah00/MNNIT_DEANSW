import { FiDownload, FiInfo } from "react-icons/fi";

function ScholarshipFellowship() {
  const scholarshipData = [
    {
      sno: "1",
      title: "U.P. Post Matric Scholarship of U.P Government",
      description:
        "Refer guidelines given on scholarship and fee reimbursement online system https://scholarship.up.nic.in",
      agency: "U.P Government",
    },
    {
      sno: "2",
      title: "Merit-Cum-Means Scholarship for B.Tech Students of the Institute",
      description:
        "There is a provision of giving a scholarship amount of Rs.3000 per student to the Top 10% students of the total sanctioned seats on the basis of CPI (2nd, 3rd and 4th Year) / JEE (Mains) Rank (1st Year).",
      agency: "MNNIT Allahabad",
    },
    {
      sno: "3",
      title: "Scholarships as available on National Scholarship Portal",
      description:
        "Refer guidelines under Central Schemes, UGC Schemes, AICTE Schemes and State Schemes. Different scholarships are available for SC/ST, Minorities, PwD and other students.",
      agency: "NSP / UGC / AICTE / State Schemes",
    },
    {
      sno: "4",
      title: "Scholarship provided by other states",
      description:
        "Post Matric Scholarship is given to students of the respective state. Additional allowances are provided according to state government rules.",
      agency: "Different State Governments",
    },
    {
      sno: "5",
      title: "Scholarship provided by Employers of parent of the student",
      description:
        "These scholarships are provided by employers where parents of the student work.",
      agency: "Parent Employer",
    },
    {
      sno: "6",
      title: "Scholarship provided by different companies",
      description:
        "Companies and institutions occasionally provide scholarships. Information is circulated through Dean (SW) Office and Student Notice Board.",
      agency: "Different Companies / Institutions",
    },
    {
      sno: "7",
      title: "Aid to financially weaker students of the Institute",
      description:
        "Students with annual family income less than Rs.1 Lakh may receive financial aid from the Student Welfare Fund. Around Rs.10 Lakh is distributed every year based on CPI and number of applicants.",
      agency: "MNNIT Allahabad",
    },
    {
      sno: "8",
      title: "O.P JEMS Scholarship",
      description:
        "Scholarship amount of Rs.80,000 per student awarded after online test and personal interview.",
      agency: "O.P Jindal Engineering and Management Scholarship",
    },
    {
      sno: "9",
      title: "Stipend to stipendiary M.Tech Students",
      description:
        "A scholarship amount of Rs.12,400 per month is provided to M.Tech students by the Government as per MHRD rules.",
      agency: "MHRD",
    },
    {
      sno: "10",
      title: "Stipend to stipendiary Ph.D. Students",
      description:
        "Ph.D. students receive Rs.25,000 per month during first 2 years and Rs.28,000 per month after satisfactory review. Valid for 5 years.",
      agency: "MHRD",
    },
  ];

  const boards = [
    {
      title: "Board for SC/ST",
      members: [
        "Director – President",
        "Dean (SW) – Secretary",
        "Director's Nominee – Member",
        "Director's Nominee of the SC/ST Category – Member (Account Work)",
      ],
    },
    {
      title: "Board for OBC",
      members: [
        "Director – President",
        "Dean (SW) – Secretary",
        "Director's Nominee – Member",
        "Director's Nominee of the OBC Category – Member (Account Work)",
      ],
    },
    {
      title: "Board for Minority",
      members: [
        "Director – President",
        "Dean (SW) – Secretary",
        "Director's Nominee – Member",
        "Director's Nominee of the Minority Category – Member (Account Work)",
      ],
    },
    {
      title: "Board for General",
      members: [
        "Director – President",
        "Dean (SW) – Secretary",
        "Director's Nominee – Member",
        "Director's Nominee of the General Category – Member (Account Work)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">
            Scholarship and Fellowship
          </h1>

          {/* <p className="mt-3 text-blue-100">
            Scholarships, Fellowships and Financial Assistance available for
            MNNIT students.
          </p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <div className="flex gap-4">
            <FiInfo
              size={24}
              className="text-blue-600 mt-1 flex-shrink-0"
            />

            <div>
              <h2 className="text-xl font-bold mb-3">
                Important Information
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Students are required to follow the guidelines of the
                scholarship providing agency and apply for
                scholarship/stipend/aid accordingly.
              </p>

              <p className="text-gray-700 mt-3 leading-relaxed">
                Further, all students who are applying for any scholarship
                are required to fill relevant undertaking forms:
              </p>

              <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                <li>Form DSW-03</li>
                <li>Form DSW-04</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scholarship Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-900 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">
              Scholarship / Stipend / Aid Details
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border px-4 py-3 text-left">
                    S.No
                  </th>
                  <th className="border px-4 py-3 text-left">
                    Scholarship / Stipend / Aid
                  </th>
                  <th className="border px-4 py-3 text-left">
                    Description
                  </th>
                  <th className="border px-4 py-3 text-left">
                    Agency
                  </th>
                </tr>
              </thead>

              <tbody>
                {scholarshipData.map((item) => (
                  <tr key={item.sno} className="hover:bg-gray-50">
                    <td className="border px-4 py-3">
                      {item.sno}
                    </td>

                    <td className="border px-4 py-3 font-medium">
                      {item.title}
                    </td>

                    <td className="border px-4 py-3">
                      {item.description}
                    </td>

                    <td className="border px-4 py-3">
                      {item.agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Resources */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Download Resources
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded mb-6">
            <h3 className="font-semibold text-lg mb-2">
              Important Notice
            </h3>

            <p className="text-gray-700">
              Students applying for scholarships must submit
              undertaking forms DSW-03 and DSW-04.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/pdfs/scholarship.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              <FiDownload />
              Download Official Scholarship PDF
            </a>

            <a
              href="http://www.mnnit.ac.in/swo/student_corner.php"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              <FiDownload />
              Download Undertaking Forms (DSW-03 & DSW-04)
            </a>
          </div>
        </div>

        {/* Scholarship Boards */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">
            Scholarship and Fellowship Boards
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {boards.map((board, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <div className="bg-blue-800 text-white px-4 py-3">
                  <h3 className="font-semibold text-lg">
                    {board.title}
                  </h3>
                </div>

                <div className="p-4">
                  <ol className="list-decimal ml-5 space-y-2">
                    {board.members.map((member, idx) => (
                      <li key={idx}>{member}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Contact Information
          </h2>

          <p className="text-gray-700">
            © Copyright Student Welfare Office MNNIT Allahabad
          </p>

          <p className="text-gray-700 mt-3">
            Office of Dean (Student Welfare),
            Ground Floor Administrative Building,
            MNNIT Allahabad, Prayagraj - 211004
          </p>

          <p className="text-gray-700 mt-2">
            Phone: 0532-2271038, 0532-2271039
          </p>
        </div>

      </div>
    </div>
  );
}

export default ScholarshipFellowship;