import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import dukiaToken from "../../../assets/dukia-token.png";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { fetchProductSearch } from "@/lib/fetchProductSearch";
import { Product } from "@/typings/product";

const MarketPrices = () => {
  const [tab, setTab] = useState("bars");
  const [bars, setBars] = useState<Array<Product> | null>(null);
  const [coins, setCoins] = useState<Array<Product> | null>(null);

  useEffect(() => {
    const fetchBarsData = async () => {
      const barsData = await fetchProductSearch("bar");
      setBars(barsData);
    };

    const fetchCoinsData = async () => {
      const coinsData = await fetchProductSearch("coin");
      setCoins(coinsData);
    };

    fetchBarsData();
    fetchCoinsData();

    const interval = setInterval(() => {
      fetchBarsData();
      fetchCoinsData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-2 px-4 bg-white rounded-2xl text-dukiaBlue space-y-2">
      <div className="flex items-center justify-between font-semibold">
        <p>Market Prices</p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTab("bars")}
            className={`${
              tab === "bars" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Bars
          </button>

          <button
            type="button"
            onClick={() => setTab("coins")}
            className={`${
              tab === "coins" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Coins
          </button>

          <button
            type="button"
            onClick={() => setTab("tokens")}
            className={`${
              tab === "tokens" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Tokens
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hidden md:table-row bg-dukiaGrey border-b border-dukiaBlue/[10%] hover:bg-dukiaGrey">
            <TableHead className="p-2.5 text-dukiaBlue rounded-tl-xl font-bold">
              Market Prices
            </TableHead>
            <TableHead className="p-2.5 text-dukiaBlue font-bold">
              Chart
            </TableHead>
            {(tab === "bars" || tab === "coins") && (
              <>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Bid
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Ask
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Spread
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Volume
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold rounded-tr-xl">
                  Chg 24h
                </TableHead>
              </>
            )}

            {tab === "tokens" && (
              <>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Price
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  24h Change
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  24h Volume
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Market Cap
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Tokens Table */}
          {tab === "tokens" && (
            // Example tokens
            <TableRow className="font-semibold text-[#676D88]">
              {/* Product */}
              <TableCell className="p-2.5">
                <span className="flex items-center gap-3">
                  <Image
                    src={dukiaToken}
                    alt="Dukia Token"
                    width={60}
                    height={51.92}
                  />
                  <p>Dukia Aureus</p>
                </span>
              </TableCell>

              {/* Chart */}
              <TableCell className="p-2.5">
                <svg
                  width="207"
                  height="84"
                  viewBox="0 0 207 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.71171 2L1 5.76147V84H207L199.046 56.5413L196.925 48.6422L190.562 61.055L188.972 56.5413L183.404 68.578L177.571 64.0642L172.269 71.211L168.822 68.578H161.664V56.5413L155.301 48.6422L153.445 31.7156L146.817 51.2752L142.575 43C142.222 48.893 140.985 61.356 138.864 64.0642C136.743 66.7725 136.212 60.1774 136.212 56.5413L133.561 60.6789L130.38 56.5413L127.994 64.0642L124.017 60.6789L121.631 64.0642L113.147 51.8395L109.965 56.5413L108.109 51.8395L104.928 60.6789L103.072 56.5413L95.9138 64.0642V56.5413L87.9601 60.6789V51.2752L82.6577 51.8395V60.6789H70.462L59.592 51.2752L53.2291 56.5413C52.6988 54.7859 50.1006 52.3284 43.9498 56.5413C37.799 60.7541 34.317 54.7859 33.3449 51.2752L31.2239 56.5413H27.7773V48.6422H24.3308V43H22.4749V31.7156L17.1725 39.2385V26.8257L14.5212 31.7156V13.6606L9.74903 16.6697C9.83741 14.1621 9.43089 10.0495 7.09781 13.6606C4.18147 18.1743 7.09781 5.76147 4.71171 9.14679C2.80283 11.855 3.91634 5.5107 4.71171 2Z"
                    fill="url(#paint0_linear_4266_422)"
                  />
                  <path
                    d="M1 5.76147L4.71171 2C3.91634 5.5107 2.80283 11.855 4.71171 9.14679C7.09781 5.76147 4.18147 18.1743 7.09781 13.6605C9.43089 10.0495 9.83741 14.1621 9.74903 16.6697L14.5212 13.6605V31.7156L17.1725 26.8257V39.2385L22.4749 31.7156V43H24.3308V48.6422H27.7773V56.5413H31.2239L33.3449 51.2752C34.317 54.7859 37.799 60.7541 43.9498 56.5413C50.1006 52.3284 52.6988 54.7859 53.2291 56.5413L59.592 51.2752L70.462 60.6789H82.6577V51.8394L87.9601 51.2752V60.6789L95.9138 56.5413V64.0642L103.072 56.5413L104.928 60.6789L108.109 51.8394L109.965 56.5413L113.147 51.8394L121.631 64.0642L124.017 60.6789L127.994 64.0642L130.38 56.5413L133.561 60.6789L136.212 56.5413C136.212 60.1774 136.743 66.7725 138.864 64.0642C140.985 61.356 142.222 48.893 142.575 43L146.817 51.2752L153.445 31.7156L155.301 48.6422L161.664 56.5413V68.578H168.822L172.269 71.211L177.571 64.0642L183.404 68.578L188.972 56.5413L190.562 61.055L196.925 48.6422L199.046 56.5413"
                    stroke="#D4A418"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4266_422"
                      x1="104.5"
                      y1="35.4771"
                      x2="104.217"
                      y2="84.0013"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FBF7EB" />
                      <stop offset="1" stopColor="#FBF7EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </TableCell>

              {/* Price */}
              <TableCell className="p-2.5">₦ 180,321.85</TableCell>

              {/* 24h Change */}
              <TableCell className="p-2.5 text-[#43BA64]">
                <span className="flex items-center">
                  <ArrowUp width={16} height={16} />
                  <p>1.99%</p>
                </span>
              </TableCell>

              {/* 24h Vol */}
              <TableCell className="p-2.5">₦ 1,321.85</TableCell>

              {/* Market Cap */}
              <TableCell className="p-2.5">₦ 180.3M</TableCell>
            </TableRow>
          )}

          {tab === "bars" &&
            bars &&
            bars.map((bar, index) => (
              <TableRow key={index} className="font-semibold text-[#676D88]">
                {/* Name and Thumbnail */}
                <TableCell className="p-2.5">
                  <span className="flex items-center gap-3">
                    <Image
                      src={bar.thumbnail_url}
                      alt="Dukia Token"
                      width={23.5}
                      height={40}
                      className="transform rotate-90"
                    />

                    <p>{bar.name}</p>
                  </span>
                </TableCell>

                {/* Chart */}
                <TableCell className="p-2.5">
                  <svg
                    width="207"
                    height="84"
                    viewBox="0 0 207 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.71171 2L1 5.76147V84H207L199.046 56.5413L196.925 48.6422L190.562 61.055L188.972 56.5413L183.404 68.578L177.571 64.0642L172.269 71.211L168.822 68.578H161.664V56.5413L155.301 48.6422L153.445 31.7156L146.817 51.2752L142.575 43C142.222 48.893 140.985 61.356 138.864 64.0642C136.743 66.7725 136.212 60.1774 136.212 56.5413L133.561 60.6789L130.38 56.5413L127.994 64.0642L124.017 60.6789L121.631 64.0642L113.147 51.8395L109.965 56.5413L108.109 51.8395L104.928 60.6789L103.072 56.5413L95.9138 64.0642V56.5413L87.9601 60.6789V51.2752L82.6577 51.8395V60.6789H70.462L59.592 51.2752L53.2291 56.5413C52.6988 54.7859 50.1006 52.3284 43.9498 56.5413C37.799 60.7541 34.317 54.7859 33.3449 51.2752L31.2239 56.5413H27.7773V48.6422H24.3308V43H22.4749V31.7156L17.1725 39.2385V26.8257L14.5212 31.7156V13.6606L9.74903 16.6697C9.83741 14.1621 9.43089 10.0495 7.09781 13.6606C4.18147 18.1743 7.09781 5.76147 4.71171 9.14679C2.80283 11.855 3.91634 5.5107 4.71171 2Z"
                      fill="url(#paint0_linear_4266_422)"
                    />
                    <path
                      d="M1 5.76147L4.71171 2C3.91634 5.5107 2.80283 11.855 4.71171 9.14679C7.09781 5.76147 4.18147 18.1743 7.09781 13.6605C9.43089 10.0495 9.83741 14.1621 9.74903 16.6697L14.5212 13.6605V31.7156L17.1725 26.8257V39.2385L22.4749 31.7156V43H24.3308V48.6422H27.7773V56.5413H31.2239L33.3449 51.2752C34.317 54.7859 37.799 60.7541 43.9498 56.5413C50.1006 52.3284 52.6988 54.7859 53.2291 56.5413L59.592 51.2752L70.462 60.6789H82.6577V51.8394L87.9601 51.2752V60.6789L95.9138 56.5413V64.0642L103.072 56.5413L104.928 60.6789L108.109 51.8394L109.965 56.5413L113.147 51.8394L121.631 64.0642L124.017 60.6789L127.994 64.0642L130.38 56.5413L133.561 60.6789L136.212 56.5413C136.212 60.1774 136.743 66.7725 138.864 64.0642C140.985 61.356 142.222 48.893 142.575 43L146.817 51.2752L153.445 31.7156L155.301 48.6422L161.664 56.5413V68.578H168.822L172.269 71.211L177.571 64.0642L183.404 68.578L188.972 56.5413L190.562 61.055L196.925 48.6422L199.046 56.5413"
                      stroke="#D4A418"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4266_422"
                        x1="104.5"
                        y1="35.4771"
                        x2="104.217"
                        y2="84.0013"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBF7EB" />
                        <stop offset="1" stopColor="#FBF7EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </TableCell>

                <TableCell className="p-2.5">
                  {bar.bid_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">
                  {bar.ask_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">{bar.margin_ask}</TableCell>
                <TableCell className="p-2.5">{bar.margin_bid}</TableCell>
                <TableCell className="p-2.5 text-[#43BA64]">
                  <span className="flex items-center">
                    <ArrowUp width={16} height={16} />
                    {bar.margin_bid}
                  </span>
                </TableCell>
              </TableRow>
            ))}

          {tab === "coins" &&
            coins &&
            coins.map((coin, index) => (
              <TableRow key={index} className="font-semibold text-[#676D88]">
                {/* Name and Thumbnail */}
                <TableCell className="p-2.5">
                  <span className="flex items-center gap-3">
                    <Image
                      src={coin.thumbnail_url}
                      alt="Dukia Token"
                      width={60}
                      height={60}
                    />

                    <p>{coin.name}</p>
                  </span>
                </TableCell>

                {/* Chart */}
                <TableCell className="p-2.5">
                  <svg
                    width="207"
                    height="84"
                    viewBox="0 0 207 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.71171 2L1 5.76147V84H207L199.046 56.5413L196.925 48.6422L190.562 61.055L188.972 56.5413L183.404 68.578L177.571 64.0642L172.269 71.211L168.822 68.578H161.664V56.5413L155.301 48.6422L153.445 31.7156L146.817 51.2752L142.575 43C142.222 48.893 140.985 61.356 138.864 64.0642C136.743 66.7725 136.212 60.1774 136.212 56.5413L133.561 60.6789L130.38 56.5413L127.994 64.0642L124.017 60.6789L121.631 64.0642L113.147 51.8395L109.965 56.5413L108.109 51.8395L104.928 60.6789L103.072 56.5413L95.9138 64.0642V56.5413L87.9601 60.6789V51.2752L82.6577 51.8395V60.6789H70.462L59.592 51.2752L53.2291 56.5413C52.6988 54.7859 50.1006 52.3284 43.9498 56.5413C37.799 60.7541 34.317 54.7859 33.3449 51.2752L31.2239 56.5413H27.7773V48.6422H24.3308V43H22.4749V31.7156L17.1725 39.2385V26.8257L14.5212 31.7156V13.6606L9.74903 16.6697C9.83741 14.1621 9.43089 10.0495 7.09781 13.6606C4.18147 18.1743 7.09781 5.76147 4.71171 9.14679C2.80283 11.855 3.91634 5.5107 4.71171 2Z"
                      fill="url(#paint0_linear_4266_422)"
                    />
                    <path
                      d="M1 5.76147L4.71171 2C3.91634 5.5107 2.80283 11.855 4.71171 9.14679C7.09781 5.76147 4.18147 18.1743 7.09781 13.6605C9.43089 10.0495 9.83741 14.1621 9.74903 16.6697L14.5212 13.6605V31.7156L17.1725 26.8257V39.2385L22.4749 31.7156V43H24.3308V48.6422H27.7773V56.5413H31.2239L33.3449 51.2752C34.317 54.7859 37.799 60.7541 43.9498 56.5413C50.1006 52.3284 52.6988 54.7859 53.2291 56.5413L59.592 51.2752L70.462 60.6789H82.6577V51.8394L87.9601 51.2752V60.6789L95.9138 56.5413V64.0642L103.072 56.5413L104.928 60.6789L108.109 51.8394L109.965 56.5413L113.147 51.8394L121.631 64.0642L124.017 60.6789L127.994 64.0642L130.38 56.5413L133.561 60.6789L136.212 56.5413C136.212 60.1774 136.743 66.7725 138.864 64.0642C140.985 61.356 142.222 48.893 142.575 43L146.817 51.2752L153.445 31.7156L155.301 48.6422L161.664 56.5413V68.578H168.822L172.269 71.211L177.571 64.0642L183.404 68.578L188.972 56.5413L190.562 61.055L196.925 48.6422L199.046 56.5413"
                      stroke="#D4A418"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4266_422"
                        x1="104.5"
                        y1="35.4771"
                        x2="104.217"
                        y2="84.0013"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBF7EB" />
                        <stop offset="1" stopColor="#FBF7EB" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </TableCell>

                <TableCell className="p-2.5">
                  {coin.bid_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">
                  {coin.ask_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">{coin.margin_ask}</TableCell>
                <TableCell className="p-2.5">{coin.margin_bid}</TableCell>
                <TableCell className="p-2.5 text-[#43BA64]">
                  <span className="flex items-center">
                    <ArrowUp width={16} height={16} />
                    {coin.margin_bid}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default MarketPrices;