---
title: "Summary for Packaging and Assembly Technologies for Integrated Systems"
date: 2024-01-19
updated: 2024-01-19
categories:
  - General
tags:
  - pcb工艺
  - 硬件架构
  - 可用性测试
  - 集成测试
  - 复习资料
csdn_views: 1035
csdn_likes: 23
csdn_comments: 2
csdn_favorites: 25
csdn_url: https://blog.csdn.net/m0_59180666/article/details/135671098
cover: /images/posts/Summary-for-Packaging-and-Asse/8871f973cd33.png
lang_pair:
  zh-CN: "集成系统封装与组装技术总结"
---

> 本文迁移自CSDN博客
> 原文链接：[Summary for Packaging and Assembly Technologies for Integrated Systems](https://blog.csdn.net/m0_59180666/article/details/135671098)
> 📊 1035 阅读 | 👍 23 点赞 | 💬 2 评论 | ⭐ 25 收藏

**目录**  
  
Introduction

Type of Packages:

Packaging of integrated devices

Question 1:

Question 2:

Question 3:

Question 4:

Question 5:

Report 1:

Front-end and back-end process

Question 6:

Question 7:

Inspection Process

Report 2:

Prototyping and mass production

Question 8:

Question 9:

Question 10: 

Question 11:

Report 3:

Printed circuit boards (PCBs)

What is PCB?

Question 12:

Question 13:

Question 14:

Characteristics required for PCBs

Electrical characteristics of PCBs

Question 15:

Question 16:

Mechanical characteristics of PCBs

Question 17:

Report 4:

Assembling integrated systems

Question 18:

Question 19:

Classification of solder joint methods

Question 20:

Report 5:

Reliability evaluation for integrated systems

Reliability of integrated devices ​编辑

Question 21:

Reliability of bare PCBs

Question 22:

Question 23:

Reliability of integrated systems

Question 24:

Report 6:

Evaluation technologies by numerical analysis

The necessity if numerical analysis

Question 25:

Question 26:

Summary

* * *

## Introduction

**Packaging and assembly level:**

>   1. Bare chip level: Bare chips of transistors, diodes, resistors, capacitors (discrete components), and Integrated Circuits(ICs).
>   2. Package level: Packaged devices of the first level bare chps.
>   3. Printed circuit board level: Printed circuit boards on which two or more packaged devices of the second level are connected.
>   4. Total system level: Total systems including multiple printed circuit boards of the third level in their housings.
> 

**Topics to be discussed:**

  * Packaging technologies for Integrated devices
  * Technologies for circuit boards
  * Assembly technologies
  * Reliability evaluation technologies
  * Evaluation technologies by numerical analysis

### Type of Packages:

![](/images/posts/Summary-for-Packaging-and-Asse/8871f973cd33.png)

* * *

## Packaging of integrated devices

### Question 1:

Answer the following questions for package types of SIP, ZIP, and DIP.

**1\. What are the advantage and disadvantage of SIP when compared with ZIP?**

> **Advantage of SIP:**
> 
> Structure is simpler than ZIP, so the manufacturing cost is low and it is more reliable.
> 
> **Disadvantage of SIP:**
> 
> Mounting density is lower than that of ZIP

**2\. What are the advantage and disadvantage of SIP when compared with DIP?**

> **Advantage of SIP:**
> 
> Structure is simpler than DIP, so the manufacturing cost is low and it is more reliable.
> 
> **Disadvantage of SIP:**
> 
> Mounting density is lower than that of DIP.

### Question 2:

Answer the following questions for package types of SOP, SOJ, and SON.

**1\. What are the advantage and disadvantage of SOP when compared with SOJ?**

> **Advantage of SOP:**
> 
> It is easy to process because the leads do not need to be bent inward.
> 
> **Disadvantage of SOP:**
> 
> The leads of SOP are easier to deform than the J-shaped leads of SOJ.

**2\. What are the advantage and disadvantage of SOP when compared with SON?**

> **Advantage of SOP:**
> 
> As much mounting area is required, SOP is easier to mount on circuit board than SON.
> 
> **Disadvantage of SOP:**
> 
> Mounting area is relatively large because the leads protrude to the outside. (resulting in low mounting density, I think)

### Question 3:

**Describe an advantage and an disadvantage of the four-sized surface mount packages (QFP, QFJ, QFN) when compared to the two-sized surface mount packages (SOP, SOJ, SON).**

> **Advantage of the four-sized surface mount packages**
> 
> Because the leads can protrude from the four sides, the mounting density can be increased compared to that of a two-sized package.
> 
> **Disadvantage of the four-sized surface mount packages**
> 
> Although the mounting density can be increased, processing is difficult in the package manufacturing process. 

### Question 4:

**In the die cutting process, a die cutting blade rotating at high speed is used to cut a silicon wafer. Answer at least one problem that may arise in this manufacturing process and your solution.**

> **Problems:**
> 
>   * Because the die cutting blade is rotated at high speed to cut the silicon wafer, cracks may occur in the silicon wafer during die cutting.
>   * During cutting, silicon shavings may scatter and fall on bare chips.
>   * Friction between the die cutting blade and the silicon wafer generates heat, which may thermally destroy bare chips.
> 

> 
> **Solution:**
> 
>   * Decrease the approaching speed of the die cutting blade to the silicon wafer (do not cut at once).
>   * Blow air during cutting to prevent silicon shavings from dropping onto the silicon wafer.
>   * Move the die cutting blade as quickly as possible to make it difficult for heat to remain on the silicon wafer.
> 

> 
> **The first and third solutions seem to contradict each other, but it is necessary to determine the machining conditions while maintaining a balance within the allowance range of both.**

### Question 5:

**In the die bonding process, a resin paste (adhesive) is applied to a predetermined position on the lead frame, a bare chip is moved from the silicon wafer onto the resin paste using a collet, and the bare chip is pressed to the resin paste by a pressure load. Answer at least one problem that may arise in this manufacturing process and your solution.**

> **Problems:**
> 
>   * When the collet sucks the bare chip, the impact may break the bare chip.
>   * When the collet pressure-bonds the bare chip to the resin paste, the bare chip may be broken by the impact. 
>   * If the amount of resin paste applied is small, it cause poor electric conduction.
>   * Poor positioning accuracy of the resin paste and the bare chip prevents proper pressure bonding.
> 

> 
> **Solutions:**
> 
>   * Slow down the approaching speed of the collet to the bare chip when the collet sucks the bare chip.
>   * Extend the adhesion time when the collet to the bare chip when the collet sucks the bare chip when the collet pressure-bonds the bare chip to the resin paste.
>   * Increase the standard amount of resin data. 
>   * Replace the positioning motor in the equipment with a high-precision one. Decrease the operating speed to enable reliable positioning. 
> 

### Report 1:

**Investigate the functions that are common to all the packages introduced in today's lecture, that is, the functions that are absolutely required for integrated device packages, and describe them.**

> The basic function of integrated device packages is to protect the bare chip from external stimuli such as dust, dirt, impact, and heat. Also, if the bare chip is simply covered with a protective material, it will not be possible to transmit electrical signals between the bare chip and the outside. Therefore, **the function for transmitting electrical signals between the outside and the bare chip** is required. For this reason, the package always have conductors such as lead terminals for transmitting electrical signals.
> 
> In addition, the heat dissipation function is also required if bare chips generate a particularly large amount of heat. In order to realize the heat dissipation function, it is common to equip a heat dissipation function, it is common to equip a heat dissipation plate. 

### Front-end and back-end process

> **Front-end process:**
> 
> Processes of fabricating transistors and integrated circuits on silicon wafers
> 
> **Back-end process: \--> Packaging process for integrated devices**
> 
> Processes in which a bare chip is cut out from a silicon wafer, placed on a lead frame, wire-connected between the lead and the element, and the bare chip is sealed with a package material such as mold resin. The inspection process to check whether the product works normally is included as the back-end process.

### Question 6:

**In the wire bonding process, the gold wire is held by the capillary, a gold ball is formed at the tip of the wire, the gold ball is moved to the electrode of the bare chip and pressed. After that, the gold wire is loosened in the capillary, the capillary is moved to the lead terminal side, the gold wire is press-contacted to a predetermined position of the lead terminal, and then the gold wire is cut with a cutter attatched to the capillary.**

**Answer problems that may arise in this manufacturing process and your solution.**

> **Problems:**
> 
>   * When the gold wire is held by the capillary, the holding force is too strong and the gold wire is cut.
>   * When the gold wire is held by the capillary, the holding force is too weak and the capillary fails to grip the gold wire.
>   * Poor positioning accuracy of the capillary prevents the gold ball from hitting the correct location.
>   * When the gold ball is pressed to the electrode of the bare chip, the pressing force is too strong and the bare chip is destroyed.
> 

> 
> **Solutions:**
> 
>   * Properly adjust the clumping force of the capillary to the gold wire.
>   * Properly adjust the clumping force of the capillary to the gold wire.
>   * Decrease the movement speed of the capillary to increase the positioning accuracy.
>   * Reduce the load on the bare chip by lowering the pressing force and taking a long pressing time.
> 

### Question 7:

**In the mold resin sealing process, the set of the bare chip, the lead frame, and the lead terminal connected by gold wires is transferred onto an open mold, the upper mold is lowered and fixed, and the melted resin is injected to fill the cavity without gaps. After that, the resin is cooled and solidified, the upper mold is raised, and the packaged molded product is taken out.**

**Answer problems that may arise in this manufacturing process and your solution.**

> **Problems:**
> 
>   * When the set of the bare chip, the lead frame, and the lead terminal connected by gold wires is transferred onto an open mold, the positioning accuracy is poor and the mold resin is not properly enclosed around the set.
>   * If the flow of melted resin is not smooth, cavaties may be generated inside the package.
>   * When melted resin flows, it may push away the mechanically weak gold wire. Because of this, the gold wire may be broken.
> 

> 
> **Solutions:**
> 
>   * Improve the positioning accuracy of the transport by changing the transport motor.
>   * Confirm how the melted resin flows by the resin flow simulation, and change the mold so that the melted resin flows slowly.
>   * Confirm how the melted resin flows by the resin flow simulation, and change the mold to reduce the force pushing the gold wire away.
> 

### Inspection Process

Inspection is necessary to prevent defective products from reaching the market. The inspection process can be roughly divided into:

**Electrical property inspection:**

> A packaged integrated device is inspected concerning **electrical characteristics**

**Visual inspection:**

> A packaged integrated device is inspected for **external defects (cracks of mold resin).** Products with defects in appearance are highly likely to cause **mechanical damage** from the **defected point** , so they must be rejected as well.

### Report 2:

**I introduced the inspection process. Describe why the inspection process is important and what kind of disadvantages a manufacturing company may suffer if there are problems in the inspection process and defective products are released to the market.**

> The inspection process is needed to prevent defective products from being released to the market. Recently, integrated devices have been installed not only in personal computers and smartphones but also in various machines, such as automobiles and aircraft.
> 
> In particular, in applications such as automobiles and aircraft, where failures in electrical systems directly endanger human lives, integrated devices are also required to have high reliability. In particular, in the case of integrated devices for automobiles, if there is a defect in the inspection process and defective products are released on the market, a large-scale recall of automobiles is needed, which requires huge costs.
> 
> The cost have to be covered by the integrated device manufacturer (depending on the sales contract), and in the worst case, the company will be in danger of bankruptcy.

### Prototyping and mass production

>   * Mass production at companies is a race against**time**.
>   * Persuit of production speed leads to a sharp increase in the **defective product rate**.
>   * Consider manners to "increase production speed and reduce defect rate".
>   * Consider defect modes in each production process.
> 

### Question 8:

**Answer failure modes that can occur in the die cutting process when the die cutting blade is moved at high speed to increase the wafer cutting speed.**

>   * When the die cutting blade is moved at high speed to increase the wafer cutting speed, cracking and chipping of bare chips are more likely to occur due to the high speed operation.
>   * As the processing speed increases, processing accuracy tends to decrease and processing errors increase.
> 

### Question 9:

**Answer failure modes that can occur when production speed is increased in the die bonding process.**

>   * If the transfer speed of the lead frame is made too fast, the lead frame will move out of position.
>   * When a bare chip is vacuum-sucked with a collet, increasing the speed may break the bare chip.
>   * When a bare chip is pressure-bonded to resin paste, shortening the time may break the bare chip.
>   * If the heat curing time of the resin paste is too short, adhesion failure may occur. 
> 

### Question 10: 

**Answer failure modes that can occur when production speed is increased in the wire bonding process.**

>   * When a gold ball is formed at the tip of the wire, the gold ball may lose its shape if the time is reduced.
>   * When a gold ball is pressure-welded into an electrode of a bare chip, shortening the time may result in insufficient adhesion.
>   * When a gold wire is pressure-welded into a place on a lead terminal, shortening the time may result in insufficient adhesion.
>   * When cutting a gold wire, shortening the time may result in incomplete cutting.
> 

### Question 11:

**Answer failure modes that can occur when production speed is increased in the mold resin sealing process.**

>   * When a set of a bare chip, a lead frame, an lead terminals is transferred onto an open mold, increasing the transfer speed increases the possibility that the set will shift out of position.
>   * When melted resin is injected into a mold, increasing the injection speed increases the possibility that a resin will not be fully spread and cavaties will occur.
>   * Shortening the time to cool the melted resin, for example, by forced air cooling increases the load on the resin due to thermal shock and increases the possibility of breaking.
>   * Increasing the speed, at which the molded product is removed from the mold, increases the shock on the molded product during removal. It increases the possibility of damage to the molded product.
> 

### Report 3:

I explained possible failure modes in the die cutting, die bonding, wire bonding, and mold resin sealing processes. **Describe whether these defect modes should be detected by electrical characristics inspection, visual inspection, or combination of two. Give reasons as well.**

> Various failure modes occur in the die cutting, die bonding, wire bonding, and mold resin sealing processes. Among these,**there exist defective modes that can only be detected by the electrical characteristics inspection and those that can only be detected by the visual inspection.**
> 
> For example, **poor adhesion** between the gold wire and the electrode of the bare chip during the wire bonding process is extremely difficult to detect by the visual inspection. This is because that the adhesive part is hidden under the gold wire, so the electrical characteristic inspection is required.
> 
> On the other hand, **cracks in the bare chip** during the die cutting process, for example, cannot be detected by the electrical characteristic inspection because even if the edge is slightly chipped, it does not immediately affect the electrical characteristics. However, the defects expand starting from the cracks of the bare chip and cause electrical failures **over time**. Therefore, cracks of the bare chip must be detected, thus requiring the visual inspection.
> 
> For these reasons, **a combination of both** should be used to detect defects. 

* * *

## Printed circuit boards (PCBs)

### What is PCB?

>   * In a **narrow sense** : 
>     * Refers only to boards that **do not contain** electronic components
>   * In a **broad sense** : 
>     * Refers to boards that **include** mounted electronic components
> 

> 
> ![](/images/posts/Summary-for-Packaging-and-Asse/67bd1bc8be98.png)

### Question 12:

**Describe your thoughts on how electrical circuits would be assembled if PCBs did not exist in this world, and what problems might arise in such cases.**

> If PCBs did not exist in this world, electrical circuits would be assembled using different methods in complex ways in the past. Some of the problems that might arise in such cases are: (not the given best answer)
> 
>   * Without PCBs, circuits would be more**complex to design** , manufacture, and assemble. Thus cost more in production. 
>   * Without PCBs, it would be more **prone to errors** , failures, and interference for designed circuits .
>   * Without PCBs, circuits would be**less adaptable and scalable** to the various needs and demands of consumers. 
> 

### Question 13:

**Based on the difference between the rigid and flexible boards, describe the appropriate usage for each boards and the reason why they are appropriate usage.**

> Rigid boards are widely used as the most basic and common circuit boards because they can **hold electrical circuit stably**.
> 
> In contrast, flexible boards are characterized by their ability to be **flexibly bent**. Taking advantage of this feature, they are used when boards need to be bent due to space constraints. For this reason, they are often used in small and thin electronic devices. In addition, because flexible boards can flexibly deform, they are used in machines that consist of fixed and movable parts, where the fixed and movable parts need to be electrically connected. On this direction, printers are representative. 

### Question 14:

Answer the following questions about single-sided, double-sided, and multilayer PCBs.

**1\. Describe the advantages and disadvantages of double-sided PCBs when compared with single-sided PCBs.**

> **Advantage of double-sided PCBs:**
> 
> Because the mounting surface is double when compared with the single-sided PCB, more electrical components can be mounted per area.
> 
> **Disadvantage of double-sided PCBs:**
> 
> For **electrically connecting the front and back surfaces** , it is necessary to drill through holes and plating there. So, the manufacturing cost will increase.

**2\. Describe the advantages and disadvantages of multilayer PCBs when compared with double-sided PCBs.**

> **Advantage of multilayer PCBs:**
> 
> By adding conductor layers in the middle and laying out conductors in the conductor layers, multilayer PCBs allow more complex conductor routing than double-sided PCBs.
> 
> **Disadvantage of multilayer PCBs:**
> 
> Because conductor layers are added in the middle, the manufacturing cost is even higher than for double-sided PCBs. In addition, because electrical components cannot be mounted on the conductor layer, the mounting density is not significantly higher than that of double-sided PCBs.

### Characteristics required for PCBs

**Electrical characristics:**

> Characteristics related to the electrical behavior of PCBs when electronic components are electrically connected **as a single electrical circuit**.

**Mechanical characristics:**

> Characteristics related to the strength of PCBs, where electronic components are mounted, to**external loads, impacts, and thermal loads.**

**Chemical characristics:**

> Characteristics related to the strength of PCBs against **corrosion and damage caused by chemicals** used during the electronic component mounting process. 

### Electrical characteristics of PCBs

![](/images/posts/Summary-for-Packaging-and-Asse/bf57518c5acc.png)

### Question 15:

**Answer what kind of problems can occur when the resistivity of the conductor used in a PCB is high.**

> **High resistance** of conductor wires causes voltage drop and heat generation.
> 
> On the other hand, the rated voltage is determined for electrical components to be mounted on PCBs, that is, the range of voltage and current for normal operation is determined. Therefore, if the voltage drop becomes large, the voltage imposed on an electrical component may fall below its rated voltage. In such case, the electrical component may not operate properly. In addition, if heat generated from conductor wires exceeds the heat dissipation capacity of the PCB, the conductor wires may burn out or, in the worst case, the PCB may catch fire.

### Question 16:

**Crosstalk is likely to occur if two conductors wires are long and parallel, whether in the forward or backward transmission. Consider how to layout the conductor wires in such a way that crosstalk is less likely to occur.**

> The basic solution is to **shorten the distance of parallel conductor wires **as much as possible. However, when the mounting density of electrical components is high, there are many cases where the distance of the parallel conductor wires connot be shortened on a single-sided or double-sided PCB because there is little flexibility in wiring routing. In such cases, **the use of****multilayer PCBs** is one means to consider.
> 
> Also, because the **ground pattern** has a large electrical capacitance and **absorbs noise easily** , it is often used to surpress crosstalk by locating a ground pattern between two parallel transmission lines.

### Mechanical characteristics of PCBs

![](/images/posts/Summary-for-Packaging-and-Asse/3c1a2b3efcf3.png)

### Question 17:

**The mechanical characteristics required of PCBs can be largely classified as strength against external loads (impact) and reliability against heat. Assuming actual use of integrated systems, describe to the best of your knowledge the type of loads (impacts) and heat that may apply on a PCB.**

> **Loads (impacts) that may apply on PCBs**
> 
>   * **Drop impact** when a portable electronic device, such as a smartphone, is dropped.
>   * Shock when**something is dropped on** an electronic device.
> 

> 
> **Heat that may apply on PCBs**
> 
>   * For PCBs installed in automobiles, for example, the temperature inside the automobile may exceed 50℃ during **the day in mid-summer**. PCBs for automotive use must withstand such heat.
>   * When conductor wires on a PCB are long and thin and a large current flows through them, the**high conductor resistivity of the conductor wires** may generate heat.
>   * **CPUs with high power consumption** are usually equipped with cooling fans, but the cooling capacity of the fans decreases after prolonged use. In this case,**the CPU cannot be cooled sufficiently** , and the heat generated by the CPU may be transferred to the PCB, causing adverse effects.
> 

### Report 4:

**Chemical characteristics are also important for PCBs. Investigate chemical characteristics required for printed circuit boards and describe the results as a report.**

> Chemical characteristics required for PCBs mainly include resistance to plating, etching, solvents, and migration.
> 
> Plating resistance is a property that prevents a PCB from being corroded or destroyed **when the PCB is plated.**
> 
> Etching resistance is a property that prevents a PCB from being corroded or destroyed by etching solution **during the fabrication of copper wiring patterns**.
> 
> Solvent resistance is a property that prevents a PCB from being corroded or destroyed by **organic solvents** used in the manufacturing process of the PCB and the mounting process of integrated devices.

* * *

## Assembling integrated systems

### Question 18:

The lead-free solder has a melting point about 34 ℃ higher than the lead solder. Therefore, the lead-free solder must be heated to a higher temperature in the solder joint process. Based on this, **describe as many defects as you can think that may occur when integrated devices and a PCB are soldered using the lead-free solder, compared to the case where the lead solder is used.**

> When the lead-free solder is used, the integrated device and the PCB are exposed to a hotter environment that whem the lead solder is used. There are many possible problems that can occur by this. For example, ...
> 
>   * **More heat** is transferred from the lead terminals of the integrated device. This causes thermal damage to the bare chip, resulting in **malfunction**.
>   * **More heat** is transferred from the lead terminals of the integrated device. As a result, thermal stress at the junction between the gold wire and the bare chip increases. Therefore, the gold wire and the bare chip seperate, resulting **poor electrical conductivity.**
>   * The amount of **warpage due to heating** of the PCB increases. This causes a larger misalignment of the lead terminals of the integrated device with the electrodes of the PCB. This makes the **solder joint failure** more likely to occur.
>   * In the PCB, the**adhesive** between the conductors and the base substrate **melts**. This causes the conductors to **easily pull away** from the base substrate.
> 

### Question 19:

**Consider and answer why the solder wettability is an important property for the solder.**

> Poor solder wettability means that the solder is **easily repelled by other metals**. It means that poor solder wettability cause a weak bond between an integrated device and a PCB. Therefore, using solder with poor wettability makes it difficult to acheive the main purpose of solder joints, which is to sufficiently bond lead terminals of integrated devices to electrode pads of PCBs.
> 
> The lead-free solder has a higher melting point and poorer solder wettability than the lead solder. Therefore, **the lead-free solder is difficult** for manufacturing engineers **to handle**. Furthermore, the lead-free solder is generally **more expensive** than the lead solder because silver and copper are more expensive than lead.
> 
> Thus, the lead-free solder has various disadvantages compared to the lead solder. However, **the use of lead is restricted worldwide** , so the lead-free solder has to be used. 
> 
> As previously mentioned, the lead-free solder consisting of 96.5% tin, 3% silver, and 0.5% copper is currently in common use. But as mentioned above, it has many disadvantages. For this reason, research on lead-free solders with **new composition** is proceeding. 

### Classification of solder joint methods

![](/images/posts/Summary-for-Packaging-and-Asse/2c77525a2bec.png)

### Question 20:

The dipping and flow solder joints are mainly used for solder joints of insertion mount packages. On the other hand, the reflow solder joint is mainly used for solder joints of surface mount packages.**Describe the problems that can occur when soldering surface mount packages to a PCB by the dipping and flow solder joints, as opposite to the normal case. Similarly, describe the problems that can occur when soldering an insertion mount packages to a PCB by the reflow solder joint.**

> When attempting to solder surface mount packages to a PCB by the dipping or flow solder joint, the **size of lead terminals** of surface mount packages becomes a major problem. The lead terminals are small and the distance between adjacent lead terminals. But in the case of the dipping solder joint, integrated devices and a PCB are dipped together in a solder bath. Therefore, it is difficult to prevent electrical shorts. Also in the case of the flow solder joint, melted solder is sprayed onto the integrated devices and the PCB. So, it is difficult to hold the surface mount packages so that it is not moved away by the melted solder. It is also difficult to accurately control the jet flow to prevent **electrical shorts**.
> 
> When soldering insertion mount packages and a PCB by the reflow solder joint, it is necessary to prepare **a large amount of solder paste** because insertion mount packages are generally large. So, the manufacturing cost increases. In addition, the mold resin of the insertion mount package is generally **weak against heat**. So, if the entire package is heated in a reflow furnace, the mold resin may melt. It makes the reflow solder joint difficult.

### Report 5:

**Investigate and consider an assembly method for the case where insertion mount packages are soldered to the front side of a PCB and surface mount packages are soldered to the front side of a PCB and surface mount packages are soldered to the back side of the PCB. Describe the results in a report.** (Manual soldering should not be used)

> In the case of this problem, the following processes enable solder joints of surface mount packages and insertion mount packages on the same PCB.
> 
>   1. **Applying solder pastes**
>   2. **Placing integral devices**
>   3. **Solder joints in a reflow furnace**
>   4. **Turning the PCB over**
>   5. **Covering the surface mount section by a flow pallet**
>   6. **Inserting integrated devices**
>   7. **Applying flux**
>   8. **Solder joints in a solder bath**
>   9. **Flux is cleaned and finished**
> 

> 
> ![](/images/posts/Summary-for-Packaging-and-Asse/e6c20b5d708e.png)

* * *

## Reliability evaluation for integrated systems

>   * Reliability at the integrated device (electronic component) level
>   * Reliability at the bare PCB level
>   * Reliability at the integrated device level, in which integrated devices mounted on a PCB
> 

### Reliability of integrated devices ![](/images/posts/Summary-for-Packaging-and-Asse/2779594af3fa.png)

>   * **Burn-in inspection:** Burn-in inspection is a final electrical check for integrated devices. It involves operating devices under high temperature and voltage to detect defects that might rapidly progress. This acceleration test helps identify initial defects in a short period, ensuring high product reliability by testing in harsher conditions than the manufacturer's specifications.
>     * (Summerized by ChatGPT)
>   * **Package inspection:** After passing burn-in inspection, integrated devices undergo package inspection using testers and handlers. Testers measure electrical characteristics under varying conditions, while handlers transport devices to testers. Unlike burn-in, this inspection simulates expected usage conditions. 
>     * (Summerized by ChatGPT)
> 

### Question 21:

When a certain product is operated in an environment with a significantly higher burden (high temperature, high humidity, high voltage, etc.) than the normal operating environment, a defective mode will appear after a long period of time. Tests that utilize this phenomenon to find defective products are collectively called the acceleration test. **Describe the merits and cautions of the acceleration test.**

> **[Merits]**
> 
> The major advantage of the acceleration test is that it can detect defective products in a relatively short period of time, even if the defective modes normally do not appear until a long time has passed. Some defective modes may take more than a decade to appear, and it is unrealistic to detect products with these defetive modes in real-time scale testing before the shipment. The acceleration test is almost the only way to detect such failure modes. 
> 
> **[Cautions]**
> 
> The basic idea of the acceleration test is to accelerate degradation of the test object in a harsh environment, so that degradation that normally occurs over a long period of time can occur in a short period of time. However, **a long period of time in a standard environment and a short period of time in a harsh environment are essentially different** , and not all failure modes related to aging can be detected in the acceleration test. In other words, it is necessary to know in advance **which failure modes can be detected in the acceleration test to be conducted**. This point hsould be taken into account when conducting the acceleration test. 
> 
> In particular, it is**difficult to assume all situations** regarding mechanical and electrical influences received from surrounding mechanical equipment during prolonged use, and the acceleration test is basically a test of the product alone. 

### Reliability of bare PCBs

> The following inspections are performed at the final stage of PCB manufacturing. 
> 
> ![](/images/posts/Summary-for-Packaging-and-Asse/32c135aa370c.png)

### Question 22:

**Describe the adantage and disadvantage of the flying prober method compared to the method of making a dedicated jig for each type of PCB in the short-open test. Also, based on this, describe the situation in which the method of making a dedicated jig for each type of PCB is advantageous, and conversely, the situations in which the flying prober is advantageous.**

> **[Advantage of the flying prober method]**
> 
> The main advantage of the flying prober method is its flexibility. In the method of making a dedicated jig for each type of PCB, a dedicated jig must be made each time when the conductor layout of the PCB changes. On the other hand, in the flying prober method, the probe trajectory can be flexibly programmed to perform the short-open test to PCBs having various conductor layouts.
> 
> **[Disadvantage of the flying prober method]**
> 
> The main disadvantage of the flying prober method is that it requires some time for the short-open test. In the method of making a dedicated jig for each type of PCB, the time required for inspection is short because the inspection for electrical conductivity, disconnection, and short-circuit can be performed for all electrodes on the PCB at one time. In contrast, the flying prober method requires more time for the inspection due to the time needed to move the probe.
> 
> Which method is actually more advantageous depends on the production volume of PCBs to be inspected. For **mass** production, the method of**making a dedicated jig for each type** of PCB is more efficient, while the**flying prober method** is more efficient for **low-volume** production.

### Question 23:

The visual inspection is performed on PCBs to detect defects such as partially missing conductor, partial leakage of conductor material, etc. **Why are these defects inspected even though they do not directly affect the electric conductivity, disconnection, or shorts between electrodes? Consider and describe the reasons why.**

> Although defects such as partially missing conductor or partial leakage of conductor material are **unlikely to immediately cause** the PCB to malfunction, there is **a risk of malfunction over a long period of use.** For example, if a conductor is partially missing, electric current will be generated. Then, there is a possibility that this part may burn out. Also, if some of the conductor materials leaks out, an unexpectedly high electric potential is generated between the conductor and other conductors in the neighborhood, which may cause degradation of the neighboring parts. 
> 
> Similar to the case of integrated devices, even if visual defects do not affect the immediate electrical behavior, they include the risk of unexpected failures after a long period of use, as described above. Therefore, the **visual inspection is mandatory.**

### Reliability of integrated systems

![](/images/posts/Summary-for-Packaging-and-Asse/3ca2672db789.png)

### Question 24:

We would like to inspect whether a final product of an integrated system is a good product or not by combining the function test, in-circuit test, and boundary scan test. Furthermore, if the product is defective, we would like to identify the location of the defective part. **Please show the procedure for doing so. Here, it is assumed that the test program for the function test has already been developed.**

> If a test program for the function test has already been prepared, it is possible to determine whether the final product of an integrated system is (electrically) defective or not by conducting the function test. When identifying defective parts of an defective final product, this defective product should be divided into several parts, and the in-circuit test should be conducted for the parts that can be probed, and the boundary scan test should be conducted for the parts where the boundary scan can be conducted. In this way, the defects are identified. Summerize the above, 
> 
>   1. **Perform the function test.** If the result is good, end there. If the result is defective, proceed to Step 2.
>   2. The integrated system is divided into several part (N locations): if the i-th part (i=1,...,N) can be probed, the**in-circuit test** is performed to check for defects at that part. If it is not possible, the **boundary scan test** is performed to check for defects at the part.
>   3. The procedure of step 2 is performed for all i (i=1,...,N) to identify all defective parts and terminate.
> 

### Report 6:

**Regarding the inspections for integrated systems, investigate what ingenuity in designing could be considered to facilitate the inspection. Summerize them in a report.**

> In the boundary scan test, circuits for testing are embedded inside an LSI in advance, and an integrated system is tested for conductivity and short-circuit in the test mode without using probes. The boundary scan test itself is an ingenuity in designing that facilitates testing. Therefore, it can be said that boundary scan testing itself is a test facilitation design.
> 
> The in-circuit test **uses probes** to conduct electrical inspections. Preparation of test electrodes for probes at the time of conductor layout design of PCBs can also be considered as a test facilitation design. 
> 
> The use of **mold resin with high X-ray transmittance and solder material with low X-ray transmittance** is a test facilitation design that assumes that X-ray inspection.
> 
> Various inspections are needed to ensure the reliability of the integrated system. Therefore, design considerations for the smooth execution of these inspection are strongly required.

* * *

## Evaluation technologies by numerical analysis

**Because prototyping is costly and time-consuming, we introduce evaluation by numerical analysis when designing integrated devices and systems.**

### The necessity if numerical analysis

>   * In designing integrated devices, PCBs, and systems, decisions on **dimensions, lead frame shape, wire bonding, and mold resin material** are crucial. Improper design can lead to various failures in mass production. Design evaluation methods include **prototype manufacturing and numerical analysis**. Numerical analysis involves solving equations on a computer to assess the design's validity without the need for physical prototypes.
>   * Numerical analysis extends beyond the design phase and is employed for quality assurance in integrated devices, PCBs, and systems. Manufacturers aim to assure product quality for customers through various tests and inspections, often supplemented by numerical analysis results. This approach can significantly reduce costs by replacing time-consuming and expensive tests. Additionally, numerical analysis helps identify the causes of defects in integrated systems and devices, allowing a more efficient and cost-effective quality assurance process.
> 

### Question 25:

Product prototyping and numerical analysis exist as means when considering the appropriateness of the design of integrated systems, etc. **Describe the advantages and disadvantages of the numerical analysis compared to the product prototyping.**

> **Advantages of numerial analysis**
> 
> In the case of the product prototyping, it is generally expensive and time-consuming to actually fabricate a prototype and conduct various tests on it. In contrast, the numerical analysis requires only calculations on a computer, so in many cases it is**less expensive and time-consuming** than the product prototyping. This is a major advantage of the numerical analysis.
> 
> **Disadvantages of numerial analysis**
> 
> In the numerical analysis, the governing equation, which is obtained by **abstracting real phenomenon** to be evaluated is **not correctly reflected in the governing equation** , it is impossible to correctly evaluate whether the design is appropriate or not. For example, when heat generation is a problem in LSI package design, the main modes of heat transfer are heat transfer to the PCB through the lead frame and heat transfer from the package.

### Question 26:

Consider specific examples of how the numerical analysis can be used to save time and cost in the quality assurance of integrated devices and integrated systems.

> For example, the following cases can be considered:
> 
>   * **Thermal conductivity analysis of an LED package**
>     * In LEDs, heat generation from the bare chip can be a major problem, and contermeasures need to be considered in the event of a recall due to thermal runaway of the LEDs. In this case, the thermal conductivity analysis can be used to predict how much heat can be dissipated by using package materials with different thermal conductivity. Numerical analysis is an effective tool because claims must be addressed promptly.
>   * **Thermal stress analysis of solder joints of a diode**
>     * When a diode is soldered to a PCB, the residual thermal stress is generated during the cooling process of the melted solder. The residual thermal stress is a cause of internal cracks, so the level of the residual thermal stress is high, the solder material or the package shape should be changed to reduce the residual thermal stress. Because it is extremely difficult, time-consuming, and expensive to measure the residual thermal stress experimentally, the numerical analysis is effective in this situation.
>   * **Thermal stress analysis of solder balls of a BGA package**
>     * A BGA package is soldered to a PCB with solder balls. The solder balls are particularly vulnerable to wraping of the PCB due to thermal deformation and are prone to problems such as the solder delamination. The numerical analysis is used to evaluate the thermal stress generated in the solder balls and to predict in advance whether the balls can withstand the expected thermal deformation. This prevents the occurance of defects and avoids unnecessary time-consuming and additional cost.
>   * **Thermal stress analysis of a wire of an LED**
>     * The LED is a type of diode, and in LED packages, the bare chip and lead frame are electrically connected by a wire. Because the root of the wire on the bare chip side bends greatly, it can easily break when the entire LED package is heated. The numerical analysis, rather than the prototyping test, is used to confirm the appropeiateness of countermeasures in the event of such a failure, or to prevent the occurrence of such a failure. This will reduce time and money for the queality assurance.
> 

* * *

## Summary

![](/images/posts/Summary-for-Packaging-and-Asse/a4c598924c80.png)
