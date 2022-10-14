import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const allowedParams = ["About", "Team", "Contact", "FAQ", "Other"];

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    if (allowedParams.includes(title) === false) {
      return new Response(`Failed to generate the image`, {
        status: 500,
      });
    }

    return new ImageResponse(
      (
        <div
          style={{
            background: "rgb(0 23 26)",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: "0",
              top: "0",
            }}
          >
            <svg
              width="1200"
              height="600"
              viewBox="0 0 1200 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_302_86)">
                <rect width="1200" height="600" fill="white" />
                <mask id="path-1-inside-1_302_86" fill="white">
                  <path d="M1416 555.5C1416 750.733 1257.73 909 1062.5 909C867.267 909 709 750.733 709 555.5C709 360.267 867.267 202 1062.5 202C1257.73 202 1416 360.267 1416 555.5Z" />
                  <path d="M1278.67 555.498C1278.67 674.889 1181.89 771.674 1062.5 771.674C943.107 771.674 846.322 674.889 846.322 555.498C846.322 436.107 943.107 339.322 1062.5 339.322C1181.89 339.322 1278.67 436.107 1278.67 555.498Z" />
                </mask>
                <path
                  d="M713.445 607.09C713.527 607.914 714.263 608.515 715.087 608.433C715.911 608.35 716.512 607.615 716.43 606.791L713.445 607.09ZM1016.82 762.685C1016.01 762.507 1015.21 763.019 1015.03 763.828C1014.85 764.637 1015.36 765.437 1016.17 765.615L1016.82 762.685ZM1285.73 682.71C1286.22 682.037 1286.06 681.1 1285.39 680.617C1284.72 680.133 1283.78 680.287 1283.3 680.96L1285.73 682.71ZM1274.51 557.571C1274.51 558.399 1275.18 559.071 1276.01 559.071C1276.83 559.071 1277.51 558.399 1277.51 557.571H1274.51ZM1168.26 219.268C1167.52 218.888 1166.62 219.176 1166.24 219.911C1165.86 220.647 1166.14 221.552 1166.88 221.933L1168.26 219.268ZM1307.44 645.414C1307.16 646.192 1307.56 647.053 1308.34 647.337C1309.11 647.622 1309.97 647.221 1310.26 646.443L1307.44 645.414ZM1082.91 839.138C1082.08 839.123 1081.4 839.782 1081.38 840.61C1081.37 841.438 1082.03 842.122 1082.86 842.138L1082.91 839.138ZM1413.95 529.613C1413.89 528.787 1413.17 528.167 1412.34 528.228C1411.52 528.289 1410.9 529.008 1410.96 529.835L1413.95 529.613ZM1098.79 346.327C1099.6 346.505 1100.4 345.994 1100.57 345.185C1100.75 344.376 1100.24 343.575 1099.43 343.397L1098.79 346.327ZM930.017 852.238C930.635 852.79 931.583 852.737 932.135 852.12C932.687 851.502 932.634 850.554 932.017 850.002L930.017 852.238ZM997.005 272.321C943.753 272.321 866.624 293.357 805.914 345.72C745.129 398.148 700.891 481.909 713.445 607.09L716.43 606.791C703.972 482.572 747.837 399.774 807.874 347.992C867.985 296.145 944.396 275.321 997.005 275.321V272.321ZM1016.17 765.615C1046.5 772.276 1095.39 777.226 1145.93 767.697C1196.49 758.164 1248.8 734.118 1285.73 682.71L1283.3 680.96C1246.94 731.575 1195.41 755.316 1145.37 764.749C1095.32 774.186 1046.85 769.282 1016.82 762.685L1016.17 765.615ZM1277.51 557.571C1277.51 490.149 1256.19 418.853 1210.43 364.385C1164.65 309.878 1094.47 272.321 997.005 272.321V275.321C1093.62 275.321 1162.94 312.511 1208.14 366.315C1253.36 420.158 1274.51 490.736 1274.51 557.571H1277.51ZM1166.88 221.933C1205.44 241.878 1261.86 289.554 1297.99 361.354C1334.09 433.096 1349.95 528.956 1307.44 645.414L1310.26 646.443C1353.07 529.173 1337.12 432.454 1300.67 360.005C1264.24 287.615 1207.36 239.491 1168.26 219.268L1166.88 221.933ZM1082.86 842.138C1135.68 843.132 1222.81 825.211 1294.56 776.985C1366.39 728.704 1422.85 650 1413.95 529.613L1410.96 529.835C1419.76 648.96 1363.99 726.703 1292.88 774.495C1221.7 822.343 1135.19 840.123 1082.91 839.138L1082.86 842.138ZM1099.43 343.397C1053.74 333.332 1001.7 343.511 954.037 368.483C906.367 393.462 862.97 433.3 834.572 482.746C806.165 532.207 792.761 591.298 805.135 654.711C817.508 718.119 855.628 785.709 930.017 852.238L932.017 850.002C858.002 783.807 820.301 716.768 808.08 654.136C795.859 591.509 809.085 533.148 837.174 484.24C865.271 435.318 908.234 395.87 955.43 371.14C1002.64 346.404 1053.96 336.451 1098.79 346.327L1099.43 343.397ZM1413 555.5C1413 749.076 1256.08 906 1062.5 906V912C1259.39 912 1419 752.39 1419 555.5H1413ZM1062.5 906C868.924 906 712 749.076 712 555.5H706C706 752.39 865.61 912 1062.5 912V906ZM712 555.5C712 361.924 868.924 205 1062.5 205V199C865.61 199 706 358.61 706 555.5H712ZM1062.5 205C1256.08 205 1413 361.924 1413 555.5H1419C1419 358.61 1259.39 199 1062.5 199V205ZM1275.67 555.498C1275.67 673.232 1180.23 768.674 1062.5 768.674V774.674C1183.55 774.674 1281.67 676.545 1281.67 555.498H1275.67ZM1062.5 768.674C944.764 768.674 849.322 673.232 849.322 555.498H843.322C843.322 676.545 941.45 774.674 1062.5 774.674V768.674ZM849.322 555.498C849.322 437.764 944.764 342.322 1062.5 342.322V336.322C941.45 336.322 843.322 434.45 843.322 555.498H849.322ZM1062.5 342.322C1180.23 342.322 1275.67 437.764 1275.67 555.498H1281.67C1281.67 434.45 1183.55 336.322 1062.5 336.322V342.322Z"
                  fill="#F5F5F5"
                  mask="url(#path-1-inside-1_302_86)"
                />
                <path
                  d="M884.532 569V544.579H901.251V549.989H890.994V554.648H899.785V560.058H890.994V569H884.532ZM905.707 569V544.579H914.799C916.552 544.579 918.168 544.817 919.646 545.293C921.124 545.744 922.313 546.545 923.215 547.697C924.117 548.849 924.568 550.44 924.568 552.469C924.568 554.422 924.117 556.013 923.215 557.24C922.313 558.468 921.124 559.369 919.646 559.945C918.168 560.522 916.552 560.81 914.799 560.81H912.169V569H905.707ZM912.169 555.7H914.348C915.626 555.7 916.59 555.424 917.241 554.873C917.918 554.322 918.256 553.521 918.256 552.469C918.256 551.417 917.918 550.69 917.241 550.29C916.59 549.889 915.626 549.689 914.348 549.689H912.169V555.7ZM913.634 559.119L917.993 554.836L925.92 569H918.706L913.634 559.119ZM937.327 569.451C935.348 569.451 933.607 568.975 932.105 568.023C930.602 567.071 929.425 565.656 928.573 563.778C927.746 561.874 927.333 559.507 927.333 556.677C927.333 553.922 927.746 551.617 928.573 549.764C929.425 547.885 930.602 546.483 932.105 545.556C933.607 544.604 935.348 544.128 937.327 544.128C939.306 544.128 941.046 544.604 942.549 545.556C944.052 546.483 945.217 547.885 946.043 549.764C946.895 551.617 947.321 553.922 947.321 556.677C947.321 559.507 946.895 561.874 946.043 563.778C945.217 565.656 944.052 567.071 942.549 568.023C941.046 568.975 939.306 569.451 937.327 569.451ZM937.327 563.89C938.028 563.89 938.629 563.627 939.13 563.101C939.631 562.575 940.02 561.786 940.295 560.734C940.571 559.657 940.708 558.305 940.708 556.677C940.708 555.124 940.571 553.834 940.295 552.807C940.02 551.755 939.631 550.978 939.13 550.478C938.629 549.952 938.028 549.689 937.327 549.689C936.626 549.689 936.025 549.952 935.524 550.478C935.023 550.978 934.634 551.755 934.359 552.807C934.083 553.834 933.946 555.124 933.946 556.677C933.946 558.305 934.083 559.657 934.359 560.734C934.634 561.786 935.023 562.575 935.524 563.101C936.025 563.627 936.626 563.89 937.327 563.89ZM950.838 569V544.579H957.375L961.47 555.474L963.462 560.96H963.612C963.462 559.632 963.274 558.129 963.048 556.451C962.823 554.748 962.71 553.145 962.71 551.642V544.579H968.872V569H962.335L958.239 558.067L956.248 552.619H956.098C956.248 553.997 956.436 555.525 956.661 557.203C956.887 558.856 956.999 560.434 956.999 561.937V569H950.838ZM979.152 569V549.989H972.126V544.579H992.64V549.989H985.614V569H979.152ZM996.795 569V544.579H1013.4V549.989H1003.26V553.821H1011.9V559.232H1003.26V563.59H1013.78V569H996.795ZM1018.42 569V544.579H1024.96L1029.05 555.474L1031.05 560.96H1031.2C1031.05 559.632 1030.86 558.129 1030.63 556.451C1030.41 554.748 1030.29 553.145 1030.29 551.642V544.579H1036.46V569H1029.92L1025.82 558.067L1023.83 552.619H1023.68C1023.83 553.997 1024.02 555.525 1024.24 557.203C1024.47 558.856 1024.58 560.434 1024.58 561.937V569H1018.42ZM1041.1 569V544.579H1048.13C1050.45 544.579 1052.51 544.992 1054.29 545.819C1056.09 546.62 1057.49 547.91 1058.49 549.689C1059.52 551.467 1060.04 553.796 1060.04 556.677C1060.04 559.557 1059.53 561.912 1058.53 563.74C1057.53 565.543 1056.15 566.871 1054.4 567.723C1052.67 568.574 1050.71 569 1048.5 569H1041.1ZM1047.56 563.815H1047.79C1048.84 563.815 1049.79 563.615 1050.64 563.214C1051.49 562.813 1052.17 562.099 1052.67 561.073C1053.17 560.046 1053.42 558.58 1053.42 556.677C1053.42 554.773 1053.17 553.333 1052.67 552.356C1052.17 551.354 1051.49 550.678 1050.64 550.327C1049.79 549.952 1048.84 549.764 1047.79 549.764H1047.56V563.815ZM1072.49 569.451C1071.04 569.451 1069.86 568.975 1068.96 568.023C1068.06 567.071 1067.61 565.919 1067.61 564.567C1067.61 563.239 1068.06 562.099 1068.96 561.148C1069.86 560.171 1071.04 559.682 1072.49 559.682C1073.97 559.682 1075.15 560.171 1076.03 561.148C1076.93 562.099 1077.38 563.239 1077.38 564.567C1077.38 565.919 1076.93 567.071 1076.03 568.023C1075.15 568.975 1073.97 569.451 1072.49 569.451ZM1085.7 569V544.579H1092.28L1094.27 552.544L1094.95 555.7H1095.1L1095.77 552.544L1097.76 544.579H1104.34V569H1099V563.252C1099 562.525 1099.03 561.611 1099.08 560.509C1099.15 559.407 1099.23 558.255 1099.31 557.052C1099.38 555.825 1099.47 554.66 1099.57 553.558C1099.67 552.456 1099.76 551.555 1099.83 550.853H1099.72L1097.65 558.104L1096.37 562.538H1093.52L1092.17 558.104L1090.29 550.853H1090.14C1090.21 551.555 1090.3 552.456 1090.4 553.558C1090.5 554.66 1090.59 555.825 1090.66 557.052C1090.74 558.255 1090.8 559.407 1090.85 560.509C1090.93 561.611 1090.96 562.525 1090.96 563.252V569H1085.7ZM1117.62 569.451C1116.02 569.451 1114.64 569.225 1113.49 568.775C1112.34 568.299 1111.39 567.635 1110.64 566.783C1109.91 565.907 1109.36 564.867 1108.98 563.665C1108.63 562.438 1108.46 561.06 1108.46 559.532V544.579H1114.92V560.284C1114.92 560.985 1115 561.611 1115.15 562.162C1115.32 562.688 1115.61 563.114 1116.01 563.44C1116.41 563.74 1116.95 563.89 1117.62 563.89C1118.33 563.89 1118.88 563.74 1119.28 563.44C1119.68 563.114 1119.97 562.688 1120.14 562.162C1120.32 561.611 1120.41 560.985 1120.41 560.284V544.579H1126.64V559.532C1126.64 561.06 1126.47 562.438 1126.12 563.665C1125.79 564.867 1125.26 565.907 1124.54 566.783C1123.81 567.635 1122.87 568.299 1121.72 568.775C1120.59 569.225 1119.23 569.451 1117.62 569.451Z"
                  fill="black"
                />
                <path
                  d="M39.5317 569V544.579H56.2507V549.989H45.9939V554.648H54.7854V560.058H45.9939V569H39.5317ZM60.707 569V544.579H69.7991C71.5524 544.579 73.168 544.817 74.6458 545.293C76.1236 545.744 77.3133 546.545 78.215 547.697C79.1167 548.849 79.5676 550.44 79.5676 552.469C79.5676 554.422 79.1167 556.013 78.215 557.24C77.3133 558.468 76.1236 559.369 74.6458 559.945C73.168 560.522 71.5524 560.81 69.7991 560.81H67.1692V569H60.707ZM67.1692 555.7H69.3483C70.6257 555.7 71.59 555.424 72.2412 554.873C72.9175 554.322 73.2556 553.521 73.2556 552.469C73.2556 551.417 72.9175 550.69 72.2412 550.29C71.59 549.889 70.6257 549.689 69.3483 549.689H67.1692V555.7ZM68.6344 559.119L72.9926 554.836L80.9201 569H73.7065L68.6344 559.119ZM92.327 569.451C90.3482 569.451 88.6075 568.975 87.1046 568.023C85.6018 567.071 84.4246 565.656 83.573 563.778C82.7464 561.874 82.3331 559.507 82.3331 556.677C82.3331 553.922 82.7464 551.617 83.573 549.764C84.4246 547.885 85.6018 546.483 87.1046 545.556C88.6075 544.604 90.3482 544.128 92.327 544.128C94.3057 544.128 96.0465 544.604 97.5493 545.556C99.0522 546.483 100.217 547.885 101.043 549.764C101.895 551.617 102.321 553.922 102.321 556.677C102.321 559.507 101.895 561.874 101.043 563.778C100.217 565.656 99.0522 567.071 97.5493 568.023C96.0465 568.975 94.3057 569.451 92.327 569.451ZM92.327 563.89C93.0283 563.89 93.6294 563.627 94.1304 563.101C94.6313 562.575 95.0196 561.786 95.2951 560.734C95.5706 559.657 95.7084 558.305 95.7084 556.677C95.7084 555.124 95.5706 553.834 95.2951 552.807C95.0196 551.755 94.6313 550.978 94.1304 550.478C93.6294 549.952 93.0283 549.689 92.327 549.689C91.6257 549.689 91.0245 549.952 90.5236 550.478C90.0226 550.978 89.6344 551.755 89.3589 552.807C89.0834 553.834 88.9456 555.124 88.9456 556.677C88.9456 558.305 89.0834 559.657 89.3589 560.734C89.6344 561.786 90.0226 562.575 90.5236 563.101C91.0245 563.627 91.6257 563.89 92.327 563.89ZM105.838 569V544.579H112.375L116.47 555.474L118.462 560.96H118.612C118.462 559.632 118.274 558.129 118.048 556.451C117.823 554.748 117.71 553.145 117.71 551.642V544.579H123.872V569H117.335L113.239 558.067L111.248 552.619H111.098C111.248 553.997 111.436 555.525 111.661 557.203C111.887 558.856 111.999 560.434 111.999 561.937V569H105.838ZM134.152 569V549.989H127.126V544.579H147.64V549.989H140.614V569H134.152ZM151.795 569V544.579H168.402V549.989H158.257V553.821H166.899V559.232H158.257V563.59H168.777V569H151.795ZM173.421 569V544.579H179.959L184.054 555.474L186.045 560.96H186.196C186.045 559.632 185.857 558.129 185.632 556.451C185.407 554.748 185.294 553.145 185.294 551.642V544.579H191.455V569H184.918L180.823 558.067L178.832 552.619H178.681C178.832 553.997 179.019 555.525 179.245 557.203C179.47 558.856 179.583 560.434 179.583 561.937V569H173.421ZM196.1 569V544.579H203.125C205.455 544.579 207.509 544.992 209.287 545.819C211.09 546.62 212.493 547.91 213.495 549.689C214.522 551.467 215.035 553.796 215.035 556.677C215.035 559.557 214.534 561.912 213.532 563.74C212.531 565.543 211.153 566.871 209.4 567.723C207.671 568.574 205.705 569 203.501 569H196.1ZM202.562 563.815H202.787C203.839 563.815 204.791 563.615 205.643 563.214C206.494 562.813 207.17 562.099 207.671 561.073C208.172 560.046 208.423 558.58 208.423 556.677C208.423 554.773 208.172 553.333 207.671 552.356C207.17 551.354 206.494 550.678 205.643 550.327C204.791 549.952 203.839 549.764 202.787 549.764H202.562V563.815ZM252.201 569.451C250.673 569.451 249.208 569.2 247.805 568.699C246.428 568.173 245.2 567.397 244.123 566.37C243.046 565.318 242.195 564.016 241.569 562.463C240.942 560.885 240.629 559.056 240.629 556.977C240.629 554.247 241.168 551.93 242.245 550.027C243.322 548.098 244.762 546.633 246.565 545.631C248.369 544.629 250.373 544.128 252.577 544.128C254.155 544.128 255.582 544.454 256.86 545.105C258.162 545.731 259.239 546.457 260.091 547.284L256.559 551.267C256.008 550.766 255.407 550.377 254.756 550.102C254.13 549.826 253.403 549.689 252.577 549.689C251.575 549.689 250.673 549.977 249.872 550.553C249.07 551.104 248.431 551.905 247.956 552.957C247.48 554.009 247.242 555.274 247.242 556.752C247.242 558.28 247.48 559.582 247.956 560.659C248.431 561.711 249.095 562.513 249.947 563.064C250.798 563.615 251.775 563.89 252.877 563.89C253.679 563.89 254.405 563.703 255.056 563.327C255.733 562.951 256.334 562.488 256.86 561.937L260.392 565.844C259.39 567.046 258.187 567.948 256.785 568.549C255.382 569.15 253.854 569.451 252.201 569.451ZM272.55 569.451C270.571 569.451 268.83 568.975 267.327 568.023C265.825 567.071 264.647 565.656 263.796 563.778C262.969 561.874 262.556 559.507 262.556 556.677C262.556 553.922 262.969 551.617 263.796 549.764C264.647 547.885 265.825 546.483 267.327 545.556C268.83 544.604 270.571 544.128 272.55 544.128C274.529 544.128 276.269 544.604 277.772 545.556C279.275 546.483 280.44 547.885 281.266 549.764C282.118 551.617 282.544 553.922 282.544 556.677C282.544 559.507 282.118 561.874 281.266 563.778C280.44 565.656 279.275 567.071 277.772 568.023C276.269 568.975 274.529 569.451 272.55 569.451ZM272.55 563.89C273.251 563.89 273.852 563.627 274.353 563.101C274.854 562.575 275.242 561.786 275.518 560.734C275.793 559.657 275.931 558.305 275.931 556.677C275.931 555.124 275.793 553.834 275.518 552.807C275.242 551.755 274.854 550.978 274.353 550.478C273.852 549.952 273.251 549.689 272.55 549.689C271.849 549.689 271.247 549.952 270.746 550.478C270.245 550.978 269.857 551.755 269.582 552.807C269.306 553.834 269.168 555.124 269.168 556.677C269.168 558.305 269.306 559.657 269.582 560.734C269.857 561.786 270.245 562.575 270.746 563.101C271.247 563.627 271.849 563.89 272.55 563.89ZM286.211 569V544.579H293.237C295.566 544.579 297.62 544.992 299.398 545.819C301.202 546.62 302.604 547.91 303.606 549.689C304.633 551.467 305.147 553.796 305.147 556.677C305.147 559.557 304.646 561.912 303.644 563.74C302.642 565.543 301.264 566.871 299.511 567.723C297.783 568.574 295.817 569 293.612 569H286.211ZM292.673 563.815H292.899C293.951 563.815 294.902 563.615 295.754 563.214C296.606 562.813 297.282 562.099 297.783 561.073C298.284 560.046 298.534 558.58 298.534 556.677C298.534 554.773 298.284 553.333 297.783 552.356C297.282 551.354 296.606 550.678 295.754 550.327C294.902 549.952 293.951 549.764 292.899 549.764H292.673V563.815ZM309.49 569V544.579H326.097V549.989H315.952V553.821H324.594V559.232H315.952V563.59H326.472V569H309.49ZM331.041 569V544.579H340.133C341.887 544.579 343.502 544.817 344.98 545.293C346.458 545.744 347.648 546.545 348.549 547.697C349.451 548.849 349.902 550.44 349.902 552.469C349.902 554.422 349.451 556.013 348.549 557.24C347.648 558.468 346.458 559.369 344.98 559.945C343.502 560.522 341.887 560.81 340.133 560.81H337.503V569H331.041ZM337.503 555.7H339.683C340.96 555.7 341.924 555.424 342.576 554.873C343.252 554.322 343.59 553.521 343.59 552.469C343.59 551.417 343.252 550.69 342.576 550.29C341.924 549.889 340.96 549.689 339.683 549.689H337.503V555.7ZM338.969 559.119L343.327 554.836L351.254 569H344.041L338.969 559.119ZM362.511 569.451C360.908 569.451 359.267 569.163 357.589 568.587C355.936 568.011 354.421 567.134 353.043 565.957L356.725 561.523C357.652 562.225 358.641 562.801 359.693 563.252C360.77 563.677 361.86 563.89 362.962 563.89C363.939 563.89 364.627 563.753 365.028 563.477C365.454 563.202 365.667 562.863 365.667 562.463C365.667 561.987 365.529 561.611 365.254 561.336C364.978 561.06 364.577 560.81 364.051 560.584C363.525 560.359 362.887 560.096 362.135 559.795L359.092 558.518C358.165 558.167 357.301 557.691 356.5 557.09C355.723 556.464 355.097 555.712 354.621 554.836C354.17 553.934 353.945 552.895 353.945 551.717C353.945 550.315 354.333 549.05 355.11 547.923C355.886 546.771 356.976 545.856 358.378 545.18C359.781 544.479 361.409 544.128 363.262 544.128C364.715 544.128 366.168 544.404 367.621 544.955C369.098 545.481 370.426 546.295 371.603 547.397L368.372 551.454C367.495 550.878 366.656 550.44 365.855 550.139C365.053 549.839 364.064 549.689 362.887 549.689C362.185 549.689 361.609 549.826 361.158 550.102C360.708 550.352 360.482 550.766 360.482 551.342C360.482 551.717 360.632 552.03 360.933 552.281C361.234 552.531 361.672 552.769 362.248 552.995C362.824 553.22 363.513 553.483 364.314 553.784L367.132 554.948C368.234 555.349 369.161 555.863 369.912 556.489C370.689 557.09 371.278 557.816 371.678 558.668C372.079 559.52 372.279 560.509 372.279 561.636C372.279 563.014 371.904 564.304 371.152 565.506C370.401 566.683 369.299 567.635 367.846 568.361C366.393 569.088 364.615 569.451 362.511 569.451ZM398.399 569V544.579H404.974L406.966 552.544L407.642 555.7H407.792L408.468 552.544L410.46 544.579H417.035V569H411.699V563.252C411.699 562.525 411.725 561.611 411.775 560.509C411.85 559.407 411.925 558.255 412 557.052C412.075 555.825 412.163 554.66 412.263 553.558C412.363 552.456 412.451 551.555 412.526 550.853H412.413L410.347 558.104L409.07 562.538H406.214L404.862 558.104L402.983 550.853H402.833C402.908 551.555 402.996 552.456 403.096 553.558C403.196 554.66 403.284 555.825 403.359 557.052C403.434 558.255 403.497 559.407 403.547 560.509C403.622 561.611 403.659 562.525 403.659 563.252V569H398.399ZM427.089 569.451C425.786 569.451 424.684 569.188 423.783 568.662C422.881 568.111 422.192 567.397 421.716 566.52C421.24 565.644 421.002 564.692 421.002 563.665C421.002 561.561 421.904 559.958 423.708 558.856C425.536 557.729 428.592 557.052 432.875 556.827C432.8 556.376 432.612 556.013 432.311 555.737C432.011 555.437 431.597 555.224 431.071 555.099C430.57 554.948 429.969 554.873 429.268 554.873C428.742 554.873 428.203 554.936 427.652 555.061C427.101 555.161 426.513 555.337 425.887 555.587C425.285 555.813 424.609 556.101 423.858 556.451L421.604 552.243C422.555 551.717 423.52 551.267 424.496 550.891C425.473 550.515 426.463 550.24 427.465 550.064C428.466 549.864 429.493 549.764 430.545 549.764C432.324 549.764 433.864 550.077 435.167 550.703C436.494 551.304 437.521 552.256 438.247 553.558C438.974 554.836 439.337 556.501 439.337 558.555V569H434.077L433.626 567.046H433.476C432.549 567.723 431.547 568.299 430.47 568.775C429.393 569.225 428.266 569.451 427.089 569.451ZM429.193 564.491C429.944 564.491 430.621 564.354 431.222 564.078C431.823 563.778 432.374 563.44 432.875 563.064V560.659C431.347 560.709 430.17 560.847 429.343 561.073C428.517 561.298 427.94 561.599 427.615 561.974C427.314 562.325 427.164 562.713 427.164 563.139C427.164 563.414 427.239 563.665 427.389 563.89C427.54 564.091 427.765 564.241 428.066 564.341C428.366 564.441 428.742 564.491 429.193 564.491ZM449.542 569.451C447.438 569.451 445.922 568.762 444.996 567.384C444.069 565.982 443.605 564.116 443.605 561.786V550.215H450.068V560.96C450.068 562.012 450.205 562.776 450.481 563.252C450.781 563.728 451.358 563.966 452.209 563.966C452.76 563.966 453.249 563.865 453.674 563.665C454.1 563.44 454.551 562.989 455.027 562.312V550.215H461.489V569H456.229L455.778 566.52H455.628C454.852 567.422 453.975 568.136 452.998 568.662C452.021 569.188 450.869 569.451 449.542 569.451ZM467.937 569V550.215H473.234L473.723 554.197H473.873C474.775 552.644 475.864 551.517 477.142 550.816C478.444 550.114 479.797 549.764 481.199 549.764C482.076 549.764 482.752 549.839 483.228 549.989C483.729 550.114 484.242 550.29 484.768 550.515L483.491 555.925C482.94 555.75 482.426 555.625 481.951 555.55C481.475 555.449 480.899 555.399 480.222 555.399C479.145 555.399 478.081 555.725 477.029 556.376C475.977 557.002 475.1 558.104 474.399 559.682V569H467.937ZM496.476 569V555.249H489.337V550.215H502.938V569H496.476ZM499.482 547.66C498.279 547.66 497.29 547.322 496.513 546.645C495.737 545.944 495.349 545.03 495.349 543.903C495.349 542.776 495.737 541.861 496.513 541.16C497.29 540.434 498.279 540.07 499.482 540.07C500.684 540.07 501.673 540.434 502.45 541.16C503.226 541.861 503.614 542.776 503.614 543.903C503.614 545.03 503.226 545.944 502.45 546.645C501.673 547.322 500.684 547.66 499.482 547.66ZM523.587 569.451C521.533 569.451 519.893 569.1 518.666 568.399C517.438 567.698 516.549 566.721 515.998 565.468C515.447 564.191 515.171 562.713 515.171 561.035V555.249H510.663V550.44L515.472 550.215L516.299 544.579H521.634V550.215H529.073V555.249H521.634V560.922C521.634 561.799 521.771 562.5 522.047 563.026C522.322 563.527 522.723 563.89 523.249 564.116C523.8 564.316 524.477 564.416 525.278 564.416C525.929 564.416 526.53 564.366 527.081 564.266C527.658 564.141 528.196 563.991 528.697 563.815L529.824 568.474C528.998 568.699 528.071 568.912 527.044 569.113C526.017 569.338 524.865 569.451 523.587 569.451ZM541.532 569V555.249H534.393V550.215H547.994V569H541.532ZM544.537 547.66C543.335 547.66 542.346 547.322 541.569 546.645C540.793 545.944 540.404 545.03 540.404 543.903C540.404 542.776 540.793 541.861 541.569 541.16C542.346 540.434 543.335 540.07 544.537 540.07C545.74 540.07 546.729 540.434 547.505 541.16C548.282 541.861 548.67 542.776 548.67 543.903C548.67 545.03 548.282 545.944 547.505 546.645C546.729 547.322 545.74 547.66 544.537 547.66ZM562.181 569.451C560.077 569.451 558.562 568.762 557.635 567.384C556.708 565.982 556.245 564.116 556.245 561.786V550.215H562.707V560.96C562.707 562.012 562.845 562.776 563.12 563.252C563.421 563.728 563.997 563.966 564.848 563.966C565.399 563.966 565.888 563.865 566.314 563.665C566.739 563.44 567.19 562.989 567.666 562.312V550.215H574.128V569H568.868L568.418 566.52H568.267C567.491 567.422 566.614 568.136 565.637 568.662C564.661 569.188 563.508 569.451 562.181 569.451ZM587.564 569.451C585.961 569.451 584.333 569.175 582.68 568.624C581.027 568.048 579.599 567.372 578.397 566.595L581.102 562.613C582.279 563.314 583.494 563.84 584.746 564.191C586.024 564.542 587.264 564.717 588.466 564.717C589.292 564.717 589.881 564.617 590.232 564.416C590.607 564.191 590.795 563.915 590.795 563.59C590.795 563.364 590.72 563.177 590.57 563.026C590.445 562.876 590.219 562.751 589.894 562.651C589.593 562.525 589.18 562.413 588.654 562.312C588.128 562.187 587.464 562.037 586.662 561.862C584.083 561.285 582.254 560.509 581.177 559.532C580.125 558.53 579.599 557.303 579.599 555.85C579.599 553.997 580.401 552.519 582.004 551.417C583.632 550.315 585.811 549.764 588.541 549.764C590.319 549.764 591.897 550.052 593.275 550.628C594.678 551.179 595.88 551.767 596.882 552.394L594.026 556.226C593.049 555.65 592.035 555.224 590.983 554.948C589.931 554.648 588.917 554.498 587.94 554.498C587.539 554.498 587.188 554.535 586.888 554.61C586.612 554.685 586.387 554.811 586.212 554.986C586.061 555.136 585.986 555.324 585.986 555.55C585.986 555.95 586.274 556.226 586.85 556.376C587.426 556.526 588.441 556.777 589.894 557.128C591.772 557.553 593.237 558.042 594.289 558.593C595.366 559.144 596.118 559.795 596.544 560.547C596.969 561.273 597.182 562.162 597.182 563.214C597.182 564.391 596.819 565.456 596.093 566.408C595.366 567.334 594.289 568.073 592.862 568.624C591.434 569.175 589.668 569.451 587.564 569.451Z"
                  fill="#565656"
                />
                <rect x="1156" width="9" height="600" fill="#FE1409" />
                <rect x="1167" width="9" height="600" fill="#1C6FBC" />
                <rect x="1178" width="9" height="600" fill="#FFE353" />
                <rect x="1189" width="9" height="600" fill="#009521" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M256.092 -3H364.516L230.34 312.542L230.312 312.61L108.391 602H0L256.092 -3ZM427.739 61.4381L681 314.264L223.976 543.387L282.531 404.155L519.203 292.33L386.438 157.945L427.739 61.4381Z"
                  fill="#969696"
                  fill-opacity="0.1"
                />
              </g>
              <defs>
                <clipPath id="clip0_302_86">
                  <rect width="1200" height="600" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              justifyItems: "center",
              fontSize: 100,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}