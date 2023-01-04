import React from "react";
import { useToken } from "@chakra-ui/react";

type Size = "sm" | "md" | "lg";
type Color = "white" | "primary";
type Props = {
  size?: Size;
  color?: Color;
};

export function Logo({ size = "sm", color = "primary" }: Props) {
  const [chakraColor] = useToken("colors.main", [color]);

  if (size === "sm") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.9354 13.2006C24.4439 13.2006 24.9332 13.118 25.3906 12.9657C26.1044 12.8045 26.8418 12.7694 27.5691 12.8628C28.3921 12.9685 29.1859 13.2367 29.9044 13.6516C30.623 14.0665 31.252 14.62 31.7549 15.28C32.2166 15.8859 32.5636 16.5705 32.7795 17.2998C32.8788 17.7456 33.0467 18.184 33.2872 18.6004C34.5575 20.8007 37.371 21.5546 39.5713 20.2843C41.7716 19.0139 42.5254 16.2004 41.2551 14.0002C40.1947 12.1635 38.0592 11.3347 36.1025 11.8497L36.1004 11.8418C35.3004 12.0617 34.4646 12.1204 33.6416 12.0147C32.8186 11.909 32.0248 11.6409 31.3063 11.226C30.5877 10.811 29.9587 10.2575 29.4558 9.59758C28.9529 8.93762 28.5861 8.18436 28.3766 7.38149L28.3727 7.38253C27.8389 5.43283 26.0545 4 23.9354 4C21.8165 4 20.0323 5.43245 19.4982 7.38176L19.4972 7.38149C19.2877 8.18436 18.9209 8.93762 18.4179 9.59758C17.915 10.2575 17.286 10.811 16.5675 11.226C15.8489 11.6409 15.0552 11.909 14.2322 12.0147C13.4092 12.1204 12.5734 12.0617 11.7733 11.8418L11.7716 11.8484C9.8144 11.3323 7.67775 12.1611 6.61702 13.9983C5.34669 16.1986 6.10056 19.0121 8.30084 20.2824C9.42656 20.9324 10.7128 21.0524 11.8707 20.72C12.6411 20.5216 13.4425 20.4716 14.2322 20.573C15.0552 20.6787 15.8489 20.9468 16.5675 21.3618C17.286 21.7767 17.915 22.3302 18.4179 22.9902C18.8948 23.6159 19.2493 24.3255 19.4633 25.0817C19.9503 27.0997 21.7678 28.5989 23.9354 28.5989C26.476 28.5989 28.5356 26.5392 28.5356 23.9986C28.5356 21.4579 26.476 19.3983 23.9354 19.3983C23.4747 19.3983 23.0298 19.466 22.6101 19.592C21.857 19.7787 21.0752 19.8239 20.3047 19.7249C19.4817 19.6192 18.6879 19.3511 17.9693 18.9362C17.2508 18.5212 16.6218 17.9677 16.1189 17.3078C16.0138 17.1699 15.9147 17.028 15.8217 16.8824C15.7326 16.7017 15.6857 16.5023 15.6857 16.2994C15.6857 16.0852 15.7379 15.8749 15.837 15.6864C15.9248 15.5501 16.0179 15.4171 16.1163 15.2876C16.6187 14.6264 17.2476 14.0717 17.9662 13.6557C18.6849 13.2396 19.4791 12.9706 20.3026 12.8642C21.0278 12.7705 21.7631 12.8045 22.4752 12.964C22.9339 13.1174 23.4249 13.2006 23.9354 13.2006ZM41.258 34.0005C42.5283 31.8002 41.7744 28.9867 39.5741 27.7164C37.3738 26.4461 34.5604 27.1999 33.29 29.4002C33.087 29.7519 32.9356 30.1193 32.8337 30.4935L32.8311 30.4928C32.6216 31.2956 32.2548 32.0489 31.7518 32.7089C31.2489 33.3688 30.6199 33.9223 29.9014 34.3373C29.1829 34.7522 28.3891 35.0203 27.5661 35.126C26.7952 35.225 26.013 35.1797 25.2595 34.9929C24.8402 34.867 24.3957 34.7994 23.9354 34.7994C23.4751 34.7994 23.0306 34.8671 22.6112 34.9929C21.8577 35.1797 21.0756 35.225 20.3047 35.126C19.4817 35.0203 18.6879 34.7522 17.9693 34.3373C17.2508 33.9223 16.6218 33.3688 16.1189 32.7089C15.8361 32.3378 15.5963 31.9372 15.4034 31.5148C15.3387 30.8919 15.1455 30.2721 14.8133 29.6941C13.5429 27.4837 10.7213 26.7216 8.51089 27.992C6.30052 29.2623 5.53846 32.084 6.80879 34.2944C8.07912 36.5047 10.9008 37.2668 13.1112 35.9965C13.1509 35.9736 13.1902 35.9503 13.2291 35.9264C13.5634 35.9155 13.8988 35.9313 14.2322 35.9741C15.0552 36.0798 15.8489 36.3479 16.5675 36.7629C17.286 37.1778 17.915 37.7313 18.4179 38.3913C18.8947 39.0169 19.2492 39.7264 19.4632 40.4825C19.9501 42.5007 21.7677 44 23.9354 44C26.103 44 27.9205 42.5008 28.4075 40.4827C28.6215 39.7265 28.976 39.0169 29.4528 38.3913C29.9557 37.7313 30.5847 37.1778 31.3032 36.7629C32.0218 36.3479 32.8156 36.0798 33.6386 35.9741C34.4214 35.8736 35.2158 35.9219 35.9801 36.116C37.9702 36.7009 40.1749 35.8764 41.258 34.0005Z"
          fill={chakraColor}
        />
      </svg>
    );
  }

  if (size === "md") {
    return (
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.903 19.8008C36.6659 19.8008 37.3999 19.6771 38.0859 19.4485C39.1567 19.2067 40.2627 19.1541 41.3537 19.2942C42.5881 19.4528 43.7788 19.855 44.8566 20.4774C45.9345 21.0998 46.8779 21.93 47.6323 22.92C48.325 23.8289 48.8455 24.8558 49.1693 25.9499C49.3183 26.6185 49.5702 27.276 49.9308 27.9006C51.8363 31.2011 56.0565 32.3319 59.3569 30.4264C62.6574 28.5209 63.7882 24.3006 61.8827 21.0002C60.2921 18.2453 57.0888 17.0021 54.1538 17.7746L54.1507 17.7627C52.9505 18.0925 51.6969 18.1807 50.4624 18.0221C49.2279 17.8635 48.0372 17.4614 46.9594 16.839C45.8816 16.2166 44.9381 15.3863 44.1837 14.3964C43.4294 13.4064 42.8791 12.2765 42.5649 11.0722L42.5591 11.0738C41.7584 8.14924 39.0817 6 35.903 6C32.7248 6 30.0484 8.14867 29.2473 11.0726L29.2458 11.0722C28.9316 12.2765 28.3813 13.4064 27.6269 14.3964C26.8725 15.3863 25.9291 16.2166 24.8512 16.839C23.7734 17.4614 22.5827 17.8635 21.3483 18.0221C20.1138 18.1807 18.8601 18.0925 17.66 17.7627L17.6574 17.7726C14.7216 16.9985 11.5166 18.2416 9.92554 20.9975C8.02004 24.2979 9.15085 28.5181 12.4513 30.4236C14.14 31.3986 16.0694 31.5787 17.8065 31.08C18.9619 30.7824 20.1639 30.7074 21.3483 30.8595C22.5827 31.0181 23.7734 31.4203 24.8512 32.0427C25.9291 32.6651 26.8725 33.4953 27.6269 34.4853C28.3421 35.4237 28.8738 36.488 29.1949 37.6222C29.9253 40.6494 32.6515 42.8983 35.903 42.8983C39.714 42.8983 42.8035 39.8089 42.8035 35.9979C42.8035 32.1869 39.714 29.0975 35.903 29.0975C35.2121 29.0975 34.5449 29.199 33.9155 29.388C32.7856 29.668 31.6129 29.7359 30.457 29.5874C29.2225 29.4288 28.0318 29.0267 26.954 28.4043C25.8762 27.7818 24.9327 26.9516 24.1783 25.9617C24.0207 25.7548 23.872 25.5419 23.7325 25.3234C23.5988 25.0524 23.5286 24.7534 23.5286 24.4491C23.5286 24.1279 23.6069 23.8125 23.7554 23.5298C23.8871 23.3253 24.0269 23.1256 24.1745 22.9314C24.9281 21.9396 25.8713 21.1075 26.9493 20.4835C28.0273 19.8594 29.2186 19.4559 30.454 19.2963C31.5417 19.1557 32.6446 19.2068 33.7126 19.4459C34.4008 19.6761 35.1374 19.8008 35.903 19.8008ZM61.8869 51.0007C63.7924 47.7003 62.6616 43.4801 59.3612 41.5746C56.0608 39.6691 51.8405 40.7999 49.935 44.1003C49.6305 44.6279 49.4035 45.1789 49.2505 45.7402L49.2466 45.7392C48.9324 46.9435 48.3821 48.0734 47.6278 49.0633C46.8734 50.0532 45.9299 50.8835 44.8521 51.5059C43.7743 52.1283 42.5836 52.5305 41.3491 52.689C40.1928 52.8376 39.0197 52.7696 37.8896 52.4894C37.2605 52.3006 36.5936 52.1992 35.903 52.1992C35.2125 52.1992 34.5456 52.3006 33.9165 52.4894C32.7863 52.7696 31.6132 52.8376 30.457 52.689C29.2225 52.5305 28.0318 52.1283 26.954 51.5059C25.8762 50.8835 24.9327 50.0532 24.1783 49.0633C23.7541 48.5066 23.3945 47.9057 23.105 47.2722C23.008 46.3378 22.7182 45.4081 22.2199 44.5411C20.3144 41.2255 16.0819 40.0825 12.7664 41.988C9.45078 43.8935 8.30769 48.126 10.2132 51.4415C12.1187 54.7571 16.3512 55.9002 19.6668 53.9947C19.7264 53.9604 19.7854 53.9254 19.8436 53.8896C20.3451 53.8732 20.8482 53.897 21.3483 53.9612C22.5827 54.1198 23.7734 54.5219 24.8512 55.1443C25.9291 55.7667 26.8725 56.597 27.6269 57.5869C28.342 58.5253 28.8738 59.5896 29.1948 60.7237C29.9252 63.751 32.6515 66 35.903 66C39.1546 66 41.8809 63.751 42.6112 60.7237C42.9323 59.5896 43.464 58.5254 44.1792 57.5869C44.9336 56.597 45.877 55.7667 46.9548 55.1443C48.0327 54.5219 49.2234 54.1198 50.4578 53.9612C51.6323 53.8103 52.8241 53.8828 53.9707 54.1742C56.9557 55.0512 60.2625 53.8144 61.8869 51.0007Z"
          fill={chakraColor}
        />
      </svg>
    );
  }

  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.8707 26.4011C48.8879 26.4011 49.8665 26.2361 50.7813 25.9313C52.209 25.6089 53.6836 25.5388 55.1382 25.7257C56.7842 25.9371 58.3718 26.4733 59.8089 27.3032C61.2459 28.133 62.5039 29.24 63.5097 30.56C64.4333 31.7719 65.1274 33.1411 65.5591 34.6C65.7578 35.4914 66.0936 36.3681 66.5744 37.2009C69.115 41.6014 74.742 43.1092 79.1426 40.5685C83.5431 38.0278 85.0509 32.4008 82.5102 28.0003C80.3895 24.3271 76.1183 22.6694 72.2051 23.6994L72.2009 23.6836C70.6007 24.1233 68.9291 24.2409 67.2832 24.0294C65.6372 23.818 64.0496 23.2818 62.6125 22.4519C61.1755 21.6221 59.9175 20.5151 58.9117 19.1951C57.9058 17.8752 57.1721 16.3687 56.7531 14.763L56.7455 14.765C55.6778 10.8656 52.1089 8 47.8707 8C43.6331 8 40.0646 10.8649 38.9964 14.7635L38.9944 14.763C38.5754 16.3687 37.8417 17.8752 36.8359 19.1951C35.83 20.5151 34.5721 21.6221 33.135 22.4519C31.6979 23.2818 30.1103 23.818 28.4644 24.0294C26.8184 24.2409 25.1468 24.1233 23.5467 23.6836L23.5432 23.6969C19.6288 22.6647 15.3555 24.3222 13.2341 27.9967C10.6934 32.3972 12.2011 38.0242 16.6017 40.5649C18.8534 41.8649 21.4261 42.1049 23.7422 41.4399C25.2827 41.0432 26.8853 40.9432 28.4644 41.146C30.1103 41.3575 31.6979 41.8937 33.135 42.7235C34.5721 43.5534 35.83 44.6604 36.8359 45.9804C37.7894 47.2316 38.4984 48.6506 38.9265 50.1628C39.9003 54.1992 43.5353 57.1978 47.8707 57.1978C52.9521 57.1978 57.0713 53.0785 57.0713 47.9972C57.0713 42.9159 52.9521 38.7966 47.8707 38.7966C46.9495 38.7966 46.06 38.932 45.2208 39.184C43.7143 39.5573 42.1506 39.6478 40.6093 39.4498C38.9634 39.2384 37.3758 38.7022 35.9387 37.8723C34.5016 37.0425 33.2436 35.9354 32.2378 34.6155C32.0276 34.3397 31.8293 34.0558 31.6433 33.7645C31.4651 33.4032 31.3715 33.0045 31.3715 32.5988C31.3715 32.1705 31.4758 31.75 31.6739 31.3731C31.8495 31.1004 32.0358 30.8342 32.2327 30.5752C33.2375 29.2528 34.4951 28.1434 35.9325 27.3113C37.3698 26.4792 38.9582 25.9412 40.6053 25.7283C42.0556 25.5409 43.526 25.609 44.9501 25.9279C45.8677 26.2348 46.8498 26.4011 47.8707 26.4011ZM82.5159 68.001C85.0566 63.6004 83.5488 57.9735 79.1482 55.4328C74.7477 52.8921 69.1207 54.3999 66.58 58.8004C66.1739 59.5038 65.8713 60.2385 65.6673 60.987L65.6622 60.9856C65.2432 62.5913 64.5095 64.0978 63.5037 65.4177C62.4978 66.7377 61.2399 67.8447 59.8028 68.6745C58.3657 69.5044 56.7781 70.0406 55.1321 70.252C53.5905 70.4501 52.0264 70.3595 50.5196 69.9859C49.6808 69.7342 48.7915 69.5989 47.8707 69.5989C46.9499 69.5989 46.0607 69.7342 45.2218 69.9859C43.715 70.3595 42.1509 70.4501 40.6093 70.252C38.9634 70.0406 37.3758 69.5044 35.9387 68.6745C34.5016 67.8447 33.2436 66.7377 32.2378 65.4177C31.6722 64.6755 31.1927 63.8743 30.8067 63.0297C30.6774 61.7838 30.2909 60.5442 29.6266 59.3882C27.0859 54.9674 21.4426 53.4433 17.0218 55.9839C12.601 58.5246 11.0769 64.168 13.6176 68.5887C16.1583 73.0095 21.8016 74.5336 26.2224 71.9929C26.3019 71.9472 26.3805 71.9005 26.4581 71.8528C27.1268 71.831 27.7977 71.8626 28.4644 71.9483C30.1103 72.1597 31.6979 72.6959 33.135 73.5258C34.5721 74.3556 35.83 75.4626 36.8359 76.7826C37.7894 78.0338 38.4983 79.4527 38.9264 80.9649C39.9002 85.0013 43.5353 88 47.8707 88C52.2062 88 55.8413 85.0013 56.815 80.9649C57.2431 79.4527 57.9521 78.0338 58.9056 76.7826C59.9114 75.4626 61.1694 74.3556 62.6065 73.5258C64.0435 72.6959 65.6311 72.1597 67.2771 71.9483C68.843 71.7471 70.4321 71.8438 71.9608 72.2323C75.9408 73.4017 80.3499 71.7526 82.5159 68.001Z"
        fill={chakraColor}
      />
    </svg>
  );
}