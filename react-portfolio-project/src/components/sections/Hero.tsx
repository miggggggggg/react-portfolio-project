import { useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  return (
    <section id="hero">
      <header>
        <div className={styles.heroSection}>
          <h1 className={styles.projectTitle}>Miguel Baldacchino</h1>
          <p className={styles.elevatorPitch}>
            I'm a frontend developer focused on writing clean, maintainable code
            and building polished user experiences with React. I use TypeScript
            to create reliable, scalable applications with a strong emphasis on
            code quality and consistency.{" "}
            <a
              className={
                downloaded ? styles.resumeDownloaded : styles.resumeDownload
              }
              onClick={() => setDownloaded(true)}
              href="/Miguel-Baldacchino-Resume.pdf"
              download
            >
              Download My Resume{" "}
              {downloaded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className={styles.checkmark}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              )}
            </a>
          </p>
          <div className={styles.actionButtonSection}>
            <button
              className={styles.projectsButton}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              View Projects
            </button>
            <button
              className={styles.contactButton}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact Me
            </button>

            {/* 
          <div className={styles.imageWrapper}>
            <img
              className={styles.heroImage}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAEsCAYAAACLwdvQAAAQAElEQVR4AeydhdPtRhmHd4sVL168xd3dZXArDC7DtAz8UTAM00EGH2DQgQLFB4q7u9Zu3Vvuk+/u7Z6cHP0im+TpdL8kK++++7z3/LLZk+SccM4559xgkoH/Bvw34L+B/v4NnBD8TwISkIAEeiWg8PaK284kIIFiCfTomMLbI2y7koAEJAABhRcKJglIQAI9ElB4e4RtVxKQwK4Epllf4Z1mXB2VBCRQMAGFt+Dg6JoEJDBNAgrvNOPqqCTQJQFtH5KAwntIgDaXgAQksCsBhXdXYtaXgAQkcEgCCu8hAdpcAqUQ0I/xEFB4xxMrPZWABCZCQOGdSCAdhgQkMB4CCu94YqWnYySgzxJoIKDwNkAxSwISkECXBBTeLulqWwISkEADAYW3AYpZUyfg+CQwLAGFd1j+9i4BCcyQgMI7w6A7ZAlIYFgCCu+w/O39RgLuSWA2BBTe2YTagUpAAqUQUHhLiYR+SEACsyGg8M4m1PsN1FYSkED7BBTe9plqUQISkMBaAgrvWjwWSkACEmifgMLbPtPuLdqDBCQwagIK76jDp/MSkMAYCSi8Y4yaPktAAqMmoPC2Fj4NSUACEtiOgMK7HSdrSUACEmiNgMLbGkoNSUACEtiOwNSFdzsK1pKABCTQIwGFt0fYdiUBCUgAAgovFEwSkIAEeiQwiPD2OD67koAEJFAcAYW3uJDokAQkMHUCCu/UI+z4JCCB4gjcKLzFuaZDEpCABKZJQOGdZlwdlQQkUDABhbfg4OiaBCQwCIHOO1V4O0dsBxKQgAQWCSi8izw8koAEJNA5AYW3c8R2IAEJtEFgSjYU3ilF07FIQAKjIKDwjiJMOikBCUyJgMI7pWg6Fgn0TcD+9iKg8O6FzUYSkIAE9ieg8O7PzpYSkIAE9iKg8O6FzUYSKJmAvpVOQOEtPUL6JwEJTI6Awju5kDogCUigdAIKb+kR0r+pEHAcEjhOQOE9jsIdCUhAAv0QUHj74WwvEpCABI4TUHiPo3BnjgQcswSGIKDwDkHdPiUggVkTUHhnHX4HLwEJDEFA4R2Cun2uJ2CpBCZOQOGdeIAdngQkUB4Bhbe8mOiRBCQwcQIK78QD3N7wtCQBCbRFQOFti6R2JCABCWxJQOHdEpTVJCABCbRFQOFti+QwduxVAhIYIQGFd4RB02UJSGDcBBTeccdP7yUggRESUHg7CJomJSABCawjoPCuo2OZBCQggQ4IKLwdQNWkBCQggXUE5iO86yhYJgEJSKBHAgpvj7DtSgISkAAEFF4omCQgAQn0SGBg4e1xpHYlAQlIoBACCm8hgdANCUhgPgQU3vnE2pFKQAKFEGgS3kJc0w0JSEAC0ySg8E4zro5KAhIomIDCW3BwdE0CEhiYQEfdK7wdgdWsBCQggVUEFN5VZMyXgAQk0BEBhbcjsJqVgAS6IjB+uwrv+GPoCCQggZERUHhHFjDdlYAExk9A4R1/DB2BBEogoA87EFB4d4BlVQlIQAJtEFB426CoDQlIQAI7EFB4d4BlVQmMjYD+lklA4S0zLnolAQlMmIDCO+HgOjQJSKBMAgpvmXHRqykTcGyzJ6Dwzv6fgAAkIIG+CSi8fRO3PwlIYPYEFN7Z/xMQwAEB/0qgPwIKb3+s7UkCEpBARUDhrTD4RwISkEB/BBTe/ljb0+4EbCGBSRJQeCcZVgclAQmUTEDhLTk6+iYBCUySgMI7ybB2OyitS0AChyOg8B6On60lIAEJ7ExA4d0ZmQ0kIAEJHI6Awns4fuW01hMJSGA0BBTe0YRKRyUggakQUHinEknHIQEJjIaAwttpqDQuAQlIYJmAwrvMxBwJSEACnRJQeDvFq3EJSEACywTmKLzLFMyRgAQk0CMBhbdH2HYlAQlIAAIKLxRMEpCABHokUIzw9jhmu5KABCQwKAGFd1D8di4BCcyRgMI7x6g7ZglIYFAC64V3UNfsXAISkMA0CSi804yro5KABAomoPAWHBxdk4AEiiHQqiMKb6s4NSYBCUhgMwGFdzMja0hAAhJolYDC2ypOjUlAAn0SGGtfCu9YI6ffEpDAaAkovKMNnY5LQAJjJaDwjjVy+i2BUgno10YCCu9GRFaQgAQk0C4BhbddnlqTgAQksJGAwrsRkRUkMAUCjqEkAgpvSdHQFwlIYBYEFN5ZhNlBSkACJRFQeEuKhr7MjYDjnSkBhXemgXfYEpDAcAQU3uHY27MEJDBTAgrvTAPvsFcTsEQCXRNQeLsmrH0JSEACNQIKbw1IyYc33HBD+Mc//hG+8IUvhDPPPDO85z3vCe9+97vDe9/73vCRj3wk/OAHPwhXXXXV1kP46U9/WrXHxi7p97///cY+zj///HDWWWeF97///Ut+/vznPw/XXHPNRhtdV7jiiisqZrCDYWIAWxj/61//CjDfxQ/G9atf/Sp8/OMfr+KS2/zyl78czj333CJs7jIm67ZPQOFtn2knFhEyPsyf//znw9///vdKYJMoXHfddeGiiy4KP/7xj8MHPvCB8Mtf/nKrD/f//ve/1n1FeL72ta+FT37yk+GPf/xjQNzqfn73u98NH/zgB6vyrR1osSK8OEl96EMfqpjBjrzUBScvGH/2s58Nn/70p8Nll12WitZu//a3v4WPfvSj4Vvf+la44IILQt3mn//85/CpT30qfPGLX6zit9bYscIubB4z7WZAAgrvgPC37frf//53QAQuvPDCjU34sH/nO98J55xzzlrxRSC3FZSNnR6rQN9nn312YEacxPZY0dLm6quvDl//+tfDb3/726WyLjPwkRMDJyn2N/XFyekzn/lMdWJbV5cYYXcTU7gg6syoEfi+ba7rz7L+CCi8/bHeqycE6nvf+97WMyQ64cP9s5/9LPzlL3/hsDHxod8kEo0N12T+6Ec/Cszq1lRZKEL4GBuX3wsFHR784Q9/2MlHXLnkkkvCN77xjZXLI5RzEoEp9bdJCDozf2LVVL8Lm039mDcMAYV3GO5b9/rPf/4znHfeeQv1b3KTm4QnP/nJ4YwzzgjvfOc7wwte8IJwq1vdaqEOoob4MrNdKDh2wAcbUT92uOfmxmZHjhwJv/nNbxZm2THGcP/73z+87W1vq/x81ateFW5729ve2OjoHmL1i1/8YqHd0exO/odF3Uc6uutd7xpe97rXVT7iKz7HGCk6nv7zn/9U6+vHM7Id1qzhmWVV8SAuxOf0008Pj3zkI0OMizb/+te/LsU22ejCZrLtdngCCu/wMVjpAbMhZmhsU6UYY3jKU54SHv3oR4eb3vSm1Yf51FNPDU9/+tOr/VSPLWJ48cUXs7uUWINEiPKCxzzmMeFd73rXxvTABz4wb1btM9NlPbc6OPbnXve6V3jOc54TbnnLW1a+3e1ud6uOb3azmx2rcbDhC0PWWQ+OuvvLCYxx5z3c4Q53CC960YsC2xhj5euznvWsgBjn9YhB0xUEVw0IaF6XuDz72c8OxCXGGBgvJ8pTTjklr1ZdxbAss5B59KALm0fN+n9BBBTegoJRd4UP+4Me9KDw8Ic/PNz73vcOt771rauZ1H3uc5961XDSSSeFE088cSH/+uuvD6tmtU3rxYjPgoEtD6699tql2WCMMTzkIQ8JzM5zM4hvXdQQbGb2eb0u9m9zm9uEJzzhCdUs/I53vGO4xS1uEWDJiSHvD6G8053ulGdV+00sWSa59NJLq/L0h7Ynn3xyOqy2J5xwQmjiwbgZf1Xp2J8ubB4z7aYQAgpvIYFocoMP633ve99qNvuSl7wkvOUtb6lS/XKdtogCAhhC4LBKtL/5zW9e7ed/qFcXXsQGYcrrbbvPZTaz67w+J4GTjp4M8jz28YmZMPt54tatdMxtbulWuXQ7FtuvfOUrC3cKpPoI18c+9rGlW+POPPPMwJdeqR7cuOR//vOfH1772teGt7/97dWSTSrPt9jMj9lvYslsnRMk5SkhvPBMx2lLPifPdMwW0a5flXRhk75M5RA4oRxX9GRfAnzwuQyuLx0gfLe73e2WzCLSXM7mBYhKU928zqp9xAObeTlrzqQ8L+0j8DEurnfmNh7xiEeEJnHmkv5Pf/pTMlNtGTtr2fUTSYwxPOxhDwsn12aeVaMNf1j24MuvvFqMMdSXCriioG5ej/273OUubJYSYnxi7aqEmOXC24XNJUfMGJyAwjt4CA7nAALKfaOIT26JS/xHPepR1fpins8+M9T6jA5RwAYPE6TZJg8VfOITn6huD+PLOto2pcsvv3xpJsrMNsZFcU1tEWTWQdMxW2wk8cb3pz3tadXSCmUp4QO3yeF/ymNGywML6ThtET/GH2OzD6levsU+981yrzRc8zIEvH4yQDSvvPLKvFq1z9irndofGNeXNaiSnzS6sEkfprIIKLw9xaPtbhCc973vfdWDCL/+9a8X7gpAuJ70pCctzdCSD8wuWW5Ix2yPHDkS+CadGRyzSPIQIh7c4P7UD3/4wwuX7ZSnRJu0n7aIK7PodLxpiz/c4ZDq3f72tw+Pe9zjqi/lUh5bRPf73/9+YGaIUPMgBGJFWUqs3T71qU+t1nBT3qbtl770pepJMx5uoI+8/p3vfOfwvOc9b+kkRr914UVcmdHn7Tft5yLfhc1N/VvePwGFt3/mrfTIDBGxqhvjC7JXvvKVjbcvpbqIaRLXlLdpizggSjyNtqnupnLWWuuinIQ0b8sXi9wZkOexz7IKyw6ccJqWBLg7gy/xqLtNQuzqVwC04wT22Mc+NrziFa9Ymn1Tvk8iPvV2nEDqebscd2Fzl/6tuzsBhXd3ZkW0YKbVJJ6sF/7kJz8JbJscpU1+adtUZ1UeAsVTcfX2TTPeVTZ2yUf4nvjEJy7d+8tMnAcWWHZgPLlNlgNYI87zNu1zAmNs9Xr087vf/a56tLneD3U5GR1WNLGTpy5s5vbdL4PAvIW3jBjs5QUf0KaGiAX31PItf9PjuAgFSw31tnwRx/2s73jHO6oHCd7whjeE+93vfkuX+swMETxmqMlGvp/y2tqy5MAtYIhwbhOhZKx5Huun3ONcr5vXadrHDlyayuDMU2s8NpwvhVC3i3F3YRNfTWURUHjLisfW3vAQA7dD8cBD09NWiAmP47IWnBvli590CY+osSZ56qmnhle/+tWBW9cQrRhjoIzbrrgzIG/PPk9x5bNcbJLfVXrAAx5Q3Xu7zn6MsbpHt+mye107ymDw8pe/PKSTDk+csUZNWUr//e9/wze/+c2FLxG7GHcXNtMY3JZDQOEtJxY7eYLA8CUSjZjp8YQYAspxSszQ+CKK2WHKQ2S4lxVxYVZ7+umnV48ck5/qpG2MsXp4A/spjy2z3nxtFZEmf9vEZfsuM7sYY3W/LWNe1Qdj54SyqnxdPhwZQzrpYIuTDvl5O64kuOsh5XFPbn2tOpWt2jL2VWXkd2ETu6ayCBQovGUBGos3iAZPuNUFlEdkSfuOg2/oWYaot89nvPWyTccsdbCumtdjprdOxBB/bjGrlTcJbgAADUFJREFUjw8b5HEygQHHbSRuH7vHPe6xYArR5BHuhcwdD44cObLUYt24lyo3ZHRhs6Ebs1okoPC2CHNoU8zaEKjcD2a7q75oy+ut2ud+203CwCyt3p5ZMX3X81cd0099hpnXZYbMC26abJLHm9FYXsnbHGY/xrj0vgbscdJI68EIfZ0NJxTuOKHutinn14XNbf2wXn8EFN7+WHfe0ybx6soBhCPGxQcVEEHEsqlPhAmBystYU62LWF7ObWzcRpbn5fs8Zosw53mH3cendTaYadefRGNWXB9bssEJghNSOk7bfAmlC5upH7flENhWeMvxeEaecNsWDwjwkzE8UcbP6PArFE0fXrDwwUbU2F+VeCkLD0TwIm5+BYL3GXzuc5+rHkhoaoPNpv7y2Skz7boA4UeaGdbtMmtEoPJ8ljRWCS/LGtxJgZjnbfJ97FGHF8zk+WmftrwJjLHzUnl+qYMHUPi1jlSnvqXfel5+zIkuF81U1nTpTxksuQ2Q/ZQQ2vxR7S5spr7clkNA4S0nFkue8MHnnly+1GEfAeSpqlUfbNZy6x9sBJI3cSXjvBoRAeJXELhVii/gaLdqOQKRpO/Uni3iwNNc7JOY8SKc7KeEH/SVjtOWWXD+QpyUX19PTfkIJicfxp3y2MYYl251YyzcyYHAUSdPCDMzYsZO/5wYqMc+ZXld9vGTOxnYzxPr3fkJggc1Yox5lcBdH9heyDx6wImUfo/uHv8fbrnwUtCFTeyayiGg8JYTiyVPeJtV/XKXDzQvDkeQ8gYcN+UjFPkHG4FDjPO2CDqPC9cFCJs//OEPq/fG5vWZ5fEuhJSHECEW6ZgtthA6bHCcEk/N5XdEkM+69D3veU92lxJfZvGUWl4QYww8ncYtdXk++4geJyv288TJou4j5SxR1G+5I58rg7rwxrj8ohw41Gf7jBE/sJMSPHgYo74MwbgZf6rHtgub2DW1RKAFMwpvCxC7MsFsiA9m3T5rnbwikRkrZcyAebELs1iOU4oxBt4By+VsykPM6+/DpQyR/OpXv3r8hx2Z5XJZzmyb8pRijNVbvxDblMcWEawLOqLGE2YIO8KDkOE3M1PapMTTZixXpOO0xQeWD+rizRh4AQ5PtdXb0Q8vzaGvZCdtuU2s7iMnMpZyWEOmHxLLD/hZF0lm+fV40D/vSk59sKXd2WefXf3EEP7QBzNxTiKUp4QvcEvHaduFzWTbbRkEFN4y4tDoRYwx8K4A3m2QV+DDzCyQNVreU8sv2zbN2hAaHj7I23LbFi+f4UOf52MT8Uk2WVPmFYzk5/WabFKOKCHy7KdEW2yyNs0bz/jF3vqSAX7wiG+Mi5frCCD3IKeTS7LJzBXBpR1LHNxiRl4qZ4uw83tmbDlOCR95ICTGxb6od9ZZZ1UvyeGNbN/+9reXfl+N/ngqrn7CifEgRviS+mHLkgKCzrhZS266ouCBFXyifp5ibN9mbt/94QkovMPHYK0HzH54OIIP/tqKtUJmkc985jOXfgGCalxyIyLcusTxtol2q2zGGKu3iSEm29qjf/zg0rrehhk4M/t6Po8xM7aUz/6DH/zgdHh8y5dsvOYS8U+ZMR74iI0YF8U31WnacsXwjGc8I9z97ndvKq6e8uOnl3aJEVcdvEEtxmY/iHvbNhudn0zmuAai8I4gXnzgTzvttMAl9iZ3ETMeJuDJtHVCgFi99KUv3eqtWzEeLFlQf51NBIrXJzLzjbFZUJL/zBz5XbKmp834Eor7cnPRpB0z/8c//vELX6rFeCCmrDtTJyXasuZdvxKADz4y62c/1V+1RQBf9rKXbXxk+ZRTTgkvfOELN/KMMVY/48R7MdaxxJ8ubGLXNDwBhXf4GGzlAQLwmte8JvBOAT6QfCET44G4ISCUsyzx5je/OTCTQgQ3GUbQqY9gsE6ZC0Fu801velPgByC3sUkd6r7+9a+vHjfmEjzGRT/xj58xYhkkxoOy5CvrobzYnXXhlMc2xhj4Qg3x5ThPsGDmXF9ywBZrqywl5PVjjAEBf+tb31ptueuD8aY6cIAHJxrGwew0la3bwvONb3xjeO5znxu4OqjbZJnmtKMn0Be/+MXVj2qus5XKurCZbLsdjoDCOxz7nXuOMQbuSkAoeTEOPx3OS3J4uQvvXWDtExHaxXCMB9/U85tu6aU7dZt8ybeLTepyIuBSGYGt+8mMHIGmXj2Rz/tv8SFP2HjoQx9ar378GKE844wzln4hmZMVQnq8YrZDPgLM76/BMPUHB3iwjBHj4okha964i9jyhRk/ZV+3yVUIyyoxDm+z0fn2M7W4goDCuwKM2RKQgAS6IqDwdkVWuxKQgARWEFB4V4AxWwJTJeC4hieg8A4fAz2QgARmRkDhnVnAHa4EJDA8AYV3+BjogQRCkMGsCCi8swq3g5WABEogoPCWEAV9kIAEZkVA4Z1VuB3sbgSsLYFuCCi83XDVqgQkIIGVBBTelWgskIAEJNANAYW3G65a7Y6AliUwegIK7+hD6AAkIIGxEVB4xxYx/ZWABEZPQOEdfQjLGIBeSEAC2xNQeLdnZU0JSEACrRBQeFvBqBEJSEAC2xNQeLdnNb6aeiwBCRRJQOEtMiw6JQEJTJmAwjvl6Do2CUigSAIKb+9hsUMJSGDuBBTeuf8LcPwSkEDvBBTe3pHboQQkMHcCCu/BvwD/SkACEuiNgMLbG2o7koAEJHBAQOE94OBfCUhAAr0RKFp4e6NgRxKQgAR6JKDw9gjbriQgAQlAQOGFgkkCEpBAjwR2F94enbMrCUhAAlMkoPBOMaqOSQISKJqAwlt0eHROAhIomMDerim8e6OzoQQkIIH9CCi8+3GzlQQkIIG9CSi8e6OzoQQkUCKBMfik8I4hSvooAQlMioDCO6lwOhgJSGAMBBTeMURJHyUwdgL6v0BA4V3A4YEEJCCB7gkovN0ztgcJSEACCwQU3gUcHkhgTgQc61AEFN6hyNuvBCQwWwIK72xD78AlIIGhCCi8Q5G3Xwk0EzB3BgQU3hkE2SFKQAJlEVB4y4qH3khAAjMgoPDOIMgO8fAEtCCBNgkovG3S1JYEJCCBLQgovFtAsooEJCCBNgkovG3S1Fa/BOxNAiMloPCONHC6LQEJjJeAwjve2Om5BCQwUgIK70gDV67beiYBCWwioPBuImS5BCQggZYJKLwtA9WcBCQggU0EFN5NhKZR7igkIIGCCCi8BQVDVyQggXkQUHjnEWdHKQEJFERA4R0wGHYtAQnMk4DCO8+4O2oJSGBAAgrvgPDtWgISmCcBhbced48lIAEJdExA4e0YsOYlIAEJ1AkovHUiHktAAhLomMBIhLdjCpqXgAQk0CMBhbdH2HYlAQlIAAIKLxRMEpCABHokcBjh7dFNu5KABCQwHQIK73Ri6UgkIIGREFB4RxIo3ZSABAomsKNrCu+OwKwuAQlI4LAEFN7DErS9BCQggR0JKLw7ArO6BCQwFgLl+qnwlhsbPZOABCZKQOGdaGAdlgQkUC4Bhbfc2OiZBKZIwDEdJaDwHoXg/xKQgAT6JKDw9knbviQgAQkcJaDwHoXg/xKYOwHH3y8Bhbdf3vYmAQlIICi8/iOQgAQk0DMBhbdn4HYnga0JWHGyBBTeyYbWgUlAAqUSUHhLjYx+SUACkyWg8E42tA6sGwJalcDhCSi8h2eoBQlIQAI7EVB4d8JlZQlIQAKHJ6DwHp6hFoYnoAcSGBUBhXdU4dJZCUhgCgQU3ilE0TFIQAKjIqDwjipc43JWbyUggWYCCm8zF3MlIAEJdEZA4e0MrYYlIAEJNBNQeJu5TDfXkUlAAoMTUHgHD4EOSEACcyOg8M4t4o5XAhIYnIDCO3gIcMAkAQnMiYDCO6doO1YJSKAIAgpvEWHQCQlIYE4EFN7V0bZEAhKQQCcEFN5OsGpUAhKQwGoCCu9qNpZIQAIS6ITA6IS3EwoalYAEJNAjAYW3R9h2JQEJSAACCi8UTBKQgAR6JNCO8PbosF1JQAISGDsBhXfsEdR/CUhgdAQU3tGFTIclIIGCCWzlmsK7FSYrSUACEmiPgMLbHkstSUACEtiKgMK7FSYrSUACYyZQmu8Kb2kR0R8JSGDyBBTeyYfYAUpAAqURUHhLi4j+SGAuBGY8ToV3xsF36BKQwDAEFN5huNurBCQwYwIK74yD79AlsEzAnD4IKLx9ULYPCUhAAhkBhTeD4a4EJCCBPggovH1Qtg8JHI6ArSdGQOGdWEAdjgQkUD4Bhbf8GOmhBCQwMQIK78QC6nD6I2BPEtiXgMK7LznbSUACEtiTgMK7JzibSUACEtiXgMK7LznblUlAryQwAgIK7wiCpIsSkMC0CCi804qno5GABEZAQOEdQZDG76IjkIAEcgIKb07DfQlIQAI9EFB4e4BsFxKQgARyAgpvTmNe+45WAhIYiIDCOxB4u5WABOZLQOGdb+wduQQkMBABhXcg8Ku6NV8CEpg+AYV3+jF2hBKQQGEEFN7CAqI7EpDA9AkovNvE2DoSkIAEWiSg8LYIU1MSkIAEtiHwfwAAAP//Q2qIKQAAAAZJREFUAwAXlyx2A6cVmgAAAABJRU5ErkJggg=="
              width="350"
              height="300"
              alt="Placeholder"
            ></img>
          </div>
          */}
          </div>
        </div>
      </header>
    </section>
  );
}

export default Hero;
